#!/usr/bin/env python3
"""Russian copy linter for andreevi.ch. Usage: python3 tools/ru_lint.py ru/*.html"""
import re, sys, html
from html.parser import HTMLParser

SHORT = "в и а к с о у я на по не до от об во ко со за из ни но да же ли бы".split()
YO = ["Потемкин", "еще", "учеба", "все равно", "приглашенн", "наукоемк", "провел", "нашел", "пришел"]
SKIP = {"script", "style", "svg"}

class Text(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.chunks, self.attrs = [], [], []
    def handle_starttag(self, tag, attrs):
        if tag in SKIP: self.stack.append(tag)
        for k, v in attrs:
            if k in ("alt", "aria-label", "title", "data-cap", "data-coord", "content") and v:
                self.attrs.append(v)
    def handle_endtag(self, tag):
        if self.stack and self.stack[-1] == tag: self.stack.pop()
    def handle_data(self, d):
        if not self.stack: self.chunks.append(d)

def lint(path):
    raw = open(path, encoding="utf-8").read()
    p = Text(); p.feed(raw)
    text = "\n".join(p.chunks)            # видимый текст
    alltext = text + "\n" + "\n".join(p.attrs)  # + alt, aria-label, data-cap…
    out = []
    def hit(rule, m): out.append(f"{path}: {rule}: …{' '.join(m.split())}…")
    for m in re.finditer(r".{0,20}[–—].{0,20}", alltext): hit("тире (используем дефис или двоеточие)", m.group())
    for m in re.finditer(r'.{0,15}["“”].{0,15}', alltext): hit("кавычки (нужны «ёлочки»)", m.group())
    for w in SHORT:
        for m in re.finditer(rf"(?<![\w-])({w}) (?=\w)", text, re.I): hit(f"обычный пробел после «{w}» (нужен &#160;)", text[max(0, m.start()-12):m.end()+12])
    for m in re.finditer(r"\d+\.\d+°", alltext): hit("десятичная точка в координатах (нужна запятая)", m.group())
    for m in re.finditer(r"\d°\s?[NSEW]\b", alltext): hit("латинские стороны света (нужно с.&#160;ш., в.&#160;д.)", m.group())
    for w in YO:
        for m in re.finditer(w, alltext): hit("пропущена ё", m.group())
    if re.search(r"[\w.]+@[\w-]+\.\w+", raw): hit("email открытым текстом", "@")
    if "Michelangelus" in raw: hit("остался Michelangelus (в нём нет кириллицы)", "Michelangelus")
    if "instagram" in raw.lower(): hit("Instagram убран с сайта", "instagram")
    if 'lang="ru"' not in raw: hit("нет lang=\"ru\" на <html>", "")
    return out

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")  # Windows console is cp1252 and can't print Cyrillic
    problems = [x for f in sys.argv[1:] for x in lint(f)]
    print("\n".join(problems) if problems else "ru_lint: чисто")
    sys.exit(1 if problems else 0)
