# RUSSIAN.md: русская версия andreevi.ch

Положи этот файл в корень репозитория рядом с `CLAUDE.md`, а `ru_lint.py` в `tools/`. В `CLAUDE.md` добавь одну строку в «Hard rules»:

> For anything in Russian (`/ru/`), read `RUSSIAN.md` first and follow it.

---

## 0. Промт для Claude Code (вставить как есть)

```
Прочитай CLAUDE.md и RUSSIAN.md целиком. Задача: <сделать русскую версию всего сайта | добавить русскую страницу X | перевести изменения со страницы Y>.

Порядок:
1. Используй skill frontend-design (постоянное правило).
2. Русская страница = копия английской того же листа. Скопируй EN-файл в ru/, затем меняй только то, что перечислено в RUSSIAN.md §3 «Что меняется при копировании». Вёрстку, отступы, сетки, символы не трогай.
3. Текст переводи по RUSSIAN.md §2. Строки из Bio и Notes, которые Кирилл писал сам, переводи бережно и покажи мне перевод отдельным списком «EN → RU» до коммита.
4. Прогони python3 tools/ru_lint.py ru/*.html, исправь всё, что он нашёл.
5. Прогони проверки из RUSSIAN.md §5 (Playwright, 320/375/768/1024/1440, день и ночь), посмотри скриншоты сам.
6. Коммить мелкими шагами. Не пушь, пока я не скажу.
Говори со мной по-русски.
```

---

## 1. Что уже решено

| Решение | Значение |
|---|---|
| Гарнитура | **TT Marxiana Antiqua**, прямое начертание и курсив. Весь русский сайт одной гарнитурой: заголовки, текст, подписи, штамп. Michelangelus в `/ru/` не используется (в нём нет кириллицы). |
| Отвергнутые варианты | Soyuz Grotesk + Kazimir Text, Soyuz + Wremena, Marxiana Grotesque/Elzevir. Это были эксперименты на канвасе, в репозиторий их не переносить. |
| Где живёт | `/ru/index.html`, `/ru/work.html`, `/ru/bio.html`, `/ru/notes.html`, `/ru/research.html`. URL: `https://andreevi.ch/ru/`. |
| Имя на обложке | Две строки: «Потёмкин» / «Кирилл **Андреевич**». Отчество синим (`--signal`), выезжает при загрузке, как «A.» на английской обложке (чистый CSS). |
| Тире | Не используем вообще, ни «—», ни «–». В диапазонах дефис без пробелов: `2020-2022`. Вместо тире в тексте двоеточие, запятая или перестройка фразы. Это решение автора, оно сильнее учебника. |
| Ревизия | Буквы ревизий кириллицей: EN A B C D → RU А Б В Г. Текущая: «Изменение Г, 02.11.2026». |
| Лицензия шрифта | TT Marxiana коммерческая (TypeType). Перед публикацией проверь, что есть **веб-лицензия**. Без неё `/ru/` не выкладывать. |

---

## 2. Правила русского языка на сайте

### 2.1 Голос

- Переводим смысл, а не слова. Никаких калек: не «я являюсь инженером», а «я инженер»; не «делать фокус на», а «заниматься».
- Конкретно и коротко, как в английской версии. Если в EN одна короткая фраза, в RU тоже одна.
- Без канцелярита: «осуществлять», «в рамках», «данный», «является» под запретом.
- Обращение к читателю на «вы», со строчной: «Если окажетесь в Лекко, пишите».
- Строки, которые Кирилл написал сам (Bio, Notes, подписи к листам на обложке), не переписывать по-своему. Перевод показывать Кириллу до коммита.
- Регистр: sentence case. С прописной только первое слово и имена собственные. Заголовки разделов с прописной («Изменения», «Базы»), а не строчными, как `work` в EN: в антикве строчный заголовок выглядит как опечатка. Это сознательное отличие от EN.
- Никакого КАПСА и разрядки.

### 2.2 Буква ё

Всегда пишем ё: Потёмкин, ещё, всё, учёба, приглашённый, наукоёмкие, провёл, ремёсла, Партнёры. Линтер ловит самые частые пропуски.

### 2.3 Пунктуация

| Что | Как | Пример |
|---|---|---|
| Тире | нет; двоеточие, запятая или новая фраза | «Был и сезон в INTA под Мадридом: там я юстировал оптику» |
| Диапазон | дефис без пробелов | `2020-2022`, `А-Ж` |
| Кавычки | «ёлочки», внутри „лапки“ | «Изменение Г» |
| Многоточие | один символ `…` | |
| `<title>` | вертикальная черта вместо тире | `Работа \| Кирилл Потёмкин` |
| Точка в подписях-ярлыках | нет | «Местное время», не «Местное время.» |
| Точка в предложениях-подписях | есть | «Сначала новое.» |

### 2.4 Неразрывные пробелы (`&#160;`)

Ставим неразрывный пробел:

- **после** коротких слов: в, и, а, к, с, о, у, я, на, по, не, до, от, об, во, ко, со, за, из, ни, но, да. Пример: `в&#160;Лекко`, `я&#160;родился`, `О&#160;себе`, `2&#160;из&#160;4`.
- **перед** частицами же, ли, бы: `так&#160;же`.
- между инициалами и фамилией: `Потёмкин К.&#160;А.`
- в сокращениях: `с.&#160;ш.`, `в.&#160;д.`, `им.&#160;Баумана`.
- между числом и единицей: `900&#160;px`, `5&#160;кг`.

В `alt`, `aria-label` и `data-*` неразрывные пробелы не нужны: их не видно.

### 2.5 Числа, даты, координаты

| Что | EN | RU |
|---|---|---|
| Десятичный знак | `45.8566` | `45,8566` |
| Координаты | `45.8566° N, 9.3977° E` | `45,8566° с.&#160;ш., 9,3977° в.&#160;д.` |
| Западная/южная | `99.17° W`, `S` | `99,17° з.&#160;д.`, `ю.&#160;ш.` |
| Дата в штампе | `02.11.2026` | `02.11.2026` (без изменений) |
| Дата в тексте | `April 2026` | `апрель 2026` (месяц строчной) |
| Год в тексте | `in 2022` | `в&#160;2022 году` |
| Порядковые | `38th cycle` | `38-й цикл` |
| Время | `21:35` | `21:35`, 24 часа |
| Тысячи | `1,000` | `1&#8239;000` (узкий неразрывный) |
| Лист | `Sheet 1 of 4` | `Лист 1, листов 4` (подвал обложки); `2&#160;из&#160;4` (ячейка штампа) |

Цифры в антикве ставь классом `.num` (`font-variant-numeric: lining-nums`). **Не** `tabular-nums`: моноширинные цифры раздвигают запятые и точки в координатах.

### 2.6 Имена собственные

- Компании и вузы за рубежом пишем как есть, латиницей: Technoprobe, Politecnico di Milano, Moscow Partners LLP, HSBC, INTA, MetroSpace.
- Российские организации по-русски: МГТУ им.&#160;Баумана (в тексте можно «Бауманка»), Лицей НИУ ВШЭ, ИнтерТехЭлектро, Южтехмонтаж.
- Города русскими экзонимами: Лекко, Бергамо, Мехико, Варшава, Ростов-на-Дону, Ансон, Харьков.
- Публикации не переводим: список остаётся на английском, над ним строка «Все статьи на английском.»
- В `alt`: «Кирилл на террасе…», «Кирилл у перил…», как в EN, но по-русски.

### 2.7 Чертёжная лексика (ЕСКД)

Тон сайта: комплект чертёжных листов. В русском это означает настоящие термины из ЕСКД, а не перевод слов.

| EN | RU | Где |
|---|---|---|
| Title | Наименование | штамп, обложка |
| Write to | Написать | штамп |
| Drawn | Разраб. | штамп |
| Sheet | Лист | штамп |
| Revision | Изм. | штамп (ячейка) |
| Revision D | Изменение Г | подвал, `aria-label` треугольника |
| Date | Дата | штамп |
| Elsewhere | Также | штамп |
| Next sheet | Следующий лист | штамп |
| Back to | Назад | штамп (Research, Notes) |
| Sheets in this set | Листы комплекта | обложка |
| Datum points | Базы | Bio |
| Datum A | База А | `aria-label` символа базы |
| Revisions | Изменения | Work |
| View 1 of 5 | Вид 1 из 5 | карусель |

**Буквы.** По ЕСКД в обозначениях не используют Ё, З, Й, О, Ч, Ъ, Ы, Ь. Порядок: А Б В Г Д Е Ж И К Л М Н П Р С Т У Ф Х Ц Ш Щ Э Ю Я. Это касается букв зон на рамке (EN A B C… → RU А Б В…), ревизий (А-Г) и баз (сейчас А-Ж; следующая будет И, а не З).

**Выносные кружки категорий** на Work: EN P/W/S → RU П/Т/У (Практики, Тексты, Учёба). Цифра снизу (номер листа) не меняется.

### 2.8 Словарь интерфейса

| EN | RU |
|---|---|
| Index | Главная |
| Work | Работа |
| Bio | О&#160;себе |
| Notes | Заметки |
| Research | Исследование |
| Primary (nav aria-label) | Основная навигация |
| Cover (section) | Обложка |
| Discipline | Специальность |
| Mechanical engineering | Машиностроение |
| Now | Сейчас |
| Process Kaizen Engineer | Инженер по&#160;улучшению процессов |
| Based in | Город |
| Lecco, Italy | Лекко, Италия |
| Local time | Местное время |
| Your time | Ваше время |
| Theme / Day / Night | Тема / День / Ночь |
| Before | Раньше |
| PhD research on MiLi, a LiDAR for Mars | PhD по&#160;MiLi, лидару для&#160;Марса |
| Language | Язык |
| Placements | Практики |
| Writing | Тексты |
| Schooling | Учёба |
| Languages | Языки |
| native / fluent / learning / conversational | родной / свободно / в&#160;процессе / разговорный |
| Odd jobs | Подработки |
| How it was built | Как его строили |
| Publications | Публикации |
| MiLi at a glance | MiLi вкратце |
| Object / Programme / Coordinator / Partners / Field tests / My part | Объект / Программа / Координатор / Партнёры / Полевые испытания / Моя часть |
| Previous / Pause / Play / Next | Предыдущая / Пауза / Продолжить / Следующая |
| Photos / Photo controls | Фотографии / Управление фотографиями |

**Переключатель языков** пишем самоназваниями: `English`, `Italiano`, `Русский`. Человек ищет свой язык, написанный на своём языке. Под ним строка «Итальянская версия появится позже.»

---

## 3. Как сделать новую русскую страницу

### 3.1 Принцип

Русская страница = **копия английской того же листа**. Скопируй `work.html` в `ru/work.html` и меняй только то, что ниже. Тогда сетки, отступы, рамка, штамп и правки Кирилла (без внешней обрезной линии, без Instagram, Scholar только на research) переедут автоматически.

### 3.2 Что меняется при копировании (чеклист)

1. `<html lang="ru" data-theme="day">`.
2. Пути к ресурсам: `assets/…` → `../assets/…` (шрифты, `site.js`, favicon, фото).
3. Ссылки между листами: внутри `/ru/` относительные (`work.html`), на EN: `../work.html`.
4. `<head>`: заменить `@font-face` и шрифт, добавить `hreflang`, `og:locale`, canonical (см. §3.3).
5. Обёртка `.page`: `font-family` убрать из инлайна, добавить `class="page ru"`.
6. Зоны на рамке: латинские буквы → кириллица по ЕСКД (§2.7), цифры без изменений.
7. Навигация: Главная, Работа, О&#160;себе, Заметки; `aria-label="Основная навигация"`.
8. Ярлыки: инлайновое `font-size: 13px; font-style: italic; color: var(--muted)` можно оставить или заменить на `class="lb"`. Результат должен совпадать.
9. Весь текст, `alt`, `aria-label`, `data-cap`, `data-coord`, `<title>`, `description`.
10. Размер `h1`: русские слова длиннее. См. §3.6.
11. Символы (треугольники, базы, кружки): буквы внутри SVG, `aria-label` и атрибут `font-family` у `<text>`: Michelangelus → TT Marxiana Antiqua (§3.8).
12. Email: только `<a href="#" data-email …>email</a>`. Адрес соберёт `site.js`.
13. В конце: `grep -c Michelangelus ru/*.html` должно дать 0 на каждый файл. В EN-версии он есть в инлайне `.page` и в атрибутах `<text>` у всех SVG (по 7 штук в work и bio). Линтер тоже это ловит.

### 3.3 `<head>`

```html
<!doctype html>
<html lang="ru" data-theme="day">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Работа | Кирилл Потёмкин</title>
<meta name="description" content="…по-русски, 1-2 предложения…">
<meta property="og:type" content="website">
<meta property="og:locale" content="ru_RU">
<meta property="og:title" content="Работа | Кирилл Потёмкин">
<meta property="og:description" content="…">
<meta property="og:url" content="https://andreevi.ch/ru/work.html">
<link rel="canonical" href="https://andreevi.ch/ru/work.html">
<link rel="alternate" hreflang="en" href="https://andreevi.ch/work.html">
<link rel="alternate" hreflang="ru" href="https://andreevi.ch/ru/work.html">
<link rel="alternate" hreflang="x-default" href="https://andreevi.ch/work.html">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="../assets/fonts/TTMarxiana-Antiqua.woff2" as="font" type="font/woff2" crossorigin>
<script>(function(){var t;try{t=localStorage.getItem('kp-theme')}catch(e){}if(t!=='day'&&t!=='night'){t='day';try{if(matchMedia('(prefers-color-scheme: dark)').matches)t='night'}catch(e){}}document.documentElement.setAttribute('data-theme',t)})()</script>
<style>
/* … блок §3.4 + стили, скопированные с EN-страницы … */
</style>
<script src="../assets/site.js" defer></script>
</head>
```

Те же три строки `hreflang` добавь в **английскую** страницу этого листа: они должны указывать друг на друга.

Шрифты положи в `assets/fonts/TTMarxiana-Antiqua.woff2` и `TTMarxiana-AntiquaItalic.woff2`. Grotesque и Elzevir не нужны. В git их **не коммить**: репозиторий публичный, а лицензия не разрешает раздавать файлы. Они лежат в приватном репо `KiraKicka/personal-site-fonts` и попадают на сайт при сборке (см. Deploy в `CLAUDE.md`); локальные копии в `assets/fonts/` git игнорирует.

### 3.4 CSS для русских страниц

Вставь в начало `<style>` вместо четырёх `@font-face` Michelangelus. Токены цветов и остальные правила копируй с EN-страницы как есть.

```css
@font-face{font-family:"TT Marxiana Antiqua";src:url("../assets/fonts/TTMarxiana-Antiqua.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:"TT Marxiana Antiqua";src:url("../assets/fonts/TTMarxiana-AntiquaItalic.woff2") format("woff2");font-weight:400;font-style:italic;font-display:swap}

/* Одна гарнитура на всё. font-size-adjust выравнивает высоту строчных:
   у Antiqua x-height ≈0.45, у Michelangelus ≈0.5, так все кегли из EN-версии
   работают без пересчёта. font-synthesis:none запрещает браузеру рисовать
   фальшивый жирный и курсив. */
.ru{font-family:"TT Marxiana Antiqua",Georgia,serif;font-weight:400;font-size-adjust:0.5;font-synthesis:none;font-kerning:normal}
.ru .lb{font-style:italic;color:var(--muted)}           /* ярлыки ячеек и подписи */
.ru .num{font-variant-numeric:lining-nums}              /* цифры: только lining, НЕ tabular */
.ru .disp{font-weight:400;font-style:normal;letter-spacing:-0.02em}  /* h1/h2, города, языки */
.ru h2.disp{margin:0 0 8px;font-size:clamp(32px,3.2vw,44px);line-height:1}
.ru .sym text{font-family:"TT Marxiana Antiqua",Georgia,serif;font-style:italic}  /* буквы в символах */
```

`font-size-adjust` нужен потому, что ярлык 13 px в Antiqua без него выглядит на размер мельче, чем в EN.

### 3.5 Обложка: имя в две строки с выезжающим отчеством

Только `ru/index.html`. Заменяет EN-правила `.mid` / `mid-open` / `mid-in`. Логика та же, что у «A.» в EN: имя поднимается, через 1,1 с раскрывается отчество.

```css
.ln{animation:rise .9s cubic-bezier(.2,.7,.1,1) both}
@keyframes rise{from{opacity:0;transform:translateY(.25em)}to{opacity:1;transform:none}}

.name .l2{display:block;white-space:nowrap}             /* вторая строка: Кирилл + отчество */
.mid{display:inline-block;vertical-align:top;line-height:inherit;overflow:hidden;white-space:nowrap;
     max-width:0;
     padding-bottom:.32em;margin-bottom:-.32em;          /* место для «д»: иначе overflow срежет выносной элемент */
     animation:mid-open 1.6s cubic-bezier(.45,0,.15,1) 1.1s forwards}
.mid>span{display:inline-block;
          padding-left:.26em;                            /* межсловный пробел паддингом, не символом */
          color:var(--signal);opacity:0;transform:translateY(.18em);
          animation:mid-in 1.4s cubic-bezier(.2,.7,.1,1) 1.6s forwards}
@keyframes mid-open{to{max-width:5.9em}}                 /* «Андреевич» = 5.11em + .26em паддинг + запас */
@keyframes mid-in{to{opacity:1;transform:none}}

/* Телефон: отчество отдельной строкой, без раскрытия, только мягкое появление */
@media (max-width:760px){
  .name .l2{white-space:normal}
  .mid{display:block;max-width:none;overflow:visible;padding-bottom:0;margin-bottom:0;animation:none}  /* без overflow:visible срезается низ «Д» */
  .mid>span{padding-left:0}
}
@media (prefers-reduced-motion:reduce){
  .ln{animation:none;opacity:1;transform:none}
  .mid{animation:none;max-width:5.9em}
  .mid>span{animation:none;opacity:1;transform:none}
}
@media (prefers-reduced-motion:reduce) and (max-width:760px){.mid{max-width:none}}
```

```html
<h1 class="ln name" aria-label="Потёмкин Кирилл Андреевич"
    style="margin: clamp(28px, 4.4vw, 68px) 0 0; font-weight: 400; font-size: clamp(40px, 8.6vw, 124px); line-height: 0.98; letter-spacing: -0.02em">Потёмкин<span class="l2">Кирилл<span class="mid" aria-hidden="true"><span>Андреевич</span></span></span></h1>
```

Почему так, а не проще:

- **Пробел перед отчеством сделан паддингом.** Текстовый `&#160;` в отдельном `span` на канвасе выкидывался, отчество прилипало к имени. В статике пробел бы выжил, но паддинг надёжнее и одинаково работает везде.
- **`padding-bottom` + отрицательный `margin-bottom`.** `overflow:hidden` нужен, чтобы слово выезжало, но он обрезает выносные элементы («д» в «Андреевич»). Паддинг расширяет зону видимости вниз, отрицательный маржин возвращает строку на место.
- **`5.9em`.** Если сменишь гарнитуру или трекинг, перемерь: `span.getBoundingClientRect().width / parseFloat(getComputedStyle(h1).fontSize)` должно быть меньше `max-width` минимум на 0.3em. Проверено: Antiqua даёт 5.11em, обрезки нет.
- **`aria-label` на `h1`.** Скринридер читает полное ФИО один раз, а не «Потёмкин Кирилл» плюс скрытый кусок.

### 3.6 Размеры заголовков

Русские слова длиннее английских. Проверено на 320 px:

| Лист | `h1` |
|---|---|
| Работа, О&#160;себе, Заметки | `font-size: clamp(56px, 14vw, 210px); line-height: .86; letter-spacing: -0.005em` (с минимумом 72px «Заметки» на 320 px шире рамки: 276 px при 227 доступных) |
| Исследование | `clamp(34px, 9.6vw, 160px)` (при 36px вылезает на 2 px) |
| Обложка (ФИО) | `clamp(40px, 8.6vw, 124px); line-height: .98` |

**Длинные слова в узких колонках** (таблица «MiLi вкратце», шаги на Research) ставь с мягким переносом `&shy;` по слогам: `термо&shy;регулирование`, `Коорди&shy;натор`. `hyphens:auto` не годится: в Chrome на Windows нет русского словаря, и `overflow-wrap:anywhere` рвёт слова без дефиса где попало.

Правило для нового листа: подбери `vw` так, чтобы самое длинное слово в `h1` при 320 px занимало не больше ширины рамки минус поля. Проверка: `scrollWidth === innerWidth` и ширина `h1` ≤ ширины контейнера.

### 3.7 Штамп (title block)

Структура та же, что в EN. Меняются только ярлыки и значения:

```html
<footer style="margin: clamp(112px, 12vw, 176px) calc(-1 * clamp(20px, 4vw, 56px)) 0 0; display: flex; justify-content: flex-end">
<div class="tb" style="flex: 0 1 880px; display: grid">
<div style="grid-column: span 2; background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Наименование</div>
<div style="font-size: 22px; line-height: 1.2">Работа</div>
</div>
<div style="grid-column: span 2; background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Написать</div>
<a href="#" data-email class="u" style="font-style: italic; font-size: clamp(20px, 2vw, 26px); line-height: 1.15; overflow-wrap: anywhere">email</a>
</div>
<div style="background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Разраб.</div>
<div style="font-size: 19px">Потёмкин К.&#160;А.</div>
</div>
<div style="background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Лист</div>
<div class="num" style="font-size: 19px">2&#160;из&#160;4</div>
</div>
<div style="background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Изм.</div>
<div style="font-size: 19px">Г</div>
</div>
<div style="background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Дата</div>
<div class="num" style="font-size: 19px">02.11.2026</div>
</div>
<div class="w3" style="background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Также</div>
<div style="display: flex; flex-wrap: wrap; gap: 0 24px; font-size: 19px">
<a href="https://www.linkedin.com/in/kirakicka" class="u">LinkedIn</a>
<a href="https://github.com/KiraKicka" class="u">GitHub</a>
</div>
</div>
<div style="background: var(--paper); padding: 10px 14px 16px">
<div class="lb" style="font-size: 13px; margin-bottom: 6px">Следующий лист</div>
<a href="bio.html" class="u" style="font-size: 19px">О&#160;себе</a>
</div>
</div>
</footer>
```

Сетка штампа рисуется **бордерами ячеек** (`.tb > div{border-left;border-top}`, правый и нижний край даёт рамка), никогда не `gap:1px`.

Цепочка «Следующий лист» / «Назад»: Главная → Работа → О&#160;себе → Заметки (Назад: Главная). Исследование: Назад → Работа.

### 3.8 Символы

Треугольник ревизии (Work):

```html
<svg class="sym" role="img" aria-label="Изменение Г" width="38" height="34" viewBox="0 0 38 34"><path d="M19 2 L36 32 H2 Z" fill="none" style="stroke: var(--signal)" stroke-width="1.2"></path><text x="19" y="27" text-anchor="middle" font-size="16" style="fill: var(--signal)">Г</text></svg>
```

Выносной кружок категории (Work: П, Т, У над номером листа):

```html
<h2 id="placements" class="disp"><svg class="sym" aria-hidden="true" width="44" height="44" viewBox="0 0 44 44" style="flex: 0 0 auto"><circle cx="22" cy="22" r="20.5" fill="none" stroke-width="1.2" style="stroke: var(--signal)"></circle><line x1="1.5" y1="22" x2="42.5" y2="22" stroke-width="1.2" style="stroke: var(--signal)"></line><text x="22" y="17.5" text-anchor="middle" font-size="15" style="fill: var(--signal)">П</text><text x="22" y="36" text-anchor="middle" font-size="13" style="fill: var(--signal)">2</text></svg>Практики</h2>
```

База (Bio), координаты под символом:

```html
<li class="dp">
<span class="mk"><svg class="sym" role="img" aria-label="База А" width="30" height="46" viewBox="0 0 30 46"><rect x="1" y="1" width="28" height="28" fill="none" style="stroke: var(--signal)" stroke-width="1.2"></rect><text x="15" y="21" text-anchor="middle" font-size="17" style="fill: var(--signal)">А</text><line x1="15" y1="29" x2="15" y2="37" style="stroke: var(--signal)" stroke-width="1.2"></line><path d="M8 45 L22 45 L15 37 Z" style="fill: var(--signal)"></path></svg><span class="co">47,24° с.&#160;ш.<br>39,70° в.&#160;д.</span></span>
<span class="yr">1998</span>
<span class="pl"><span class="city disp">Ростов-на-Дону</span><span class="cty">Россия</span></span>
<span class="nt">Здесь родился.</span>
</li>
```

Это разметка с канваса, на классах. В EN-репозитории та же база свёрстана инлайн-стилями: колонка символа `flex: 0 0 84px`. Если копируешь из EN:

- в каждом `<text>` внутри SVG замени `font-family="Michelangelus, Georgia, serif"` на `font-family="'TT Marxiana Antiqua', Georgia, serif"`, иначе буква отрисуется запасным шрифтом;
- колонку символа расширь до `96px`: «47,24° с.&#160;ш.» длиннее, чем «47.24° N»;
- координатам и годам добавь `font-variant-numeric: lining-nums`.

### 3.9 Карусель на `ru/bio.html`

Разметка как в EN. Меняются подписи, координаты и кнопки. Кнопке паузы даём `data-play` / `data-pause`, чтобы `site.js` знал, что писать (§3.10).

```html
<figure aria-roledescription="карусель" aria-label="Фотографии" data-carousel style="flex: 0 1 420px; margin: 0; min-width: 0">
<div class="ph" style="position: relative; aspect-ratio: 3 / 4; border: 1px solid var(--ink); overflow: hidden; background: var(--rule-soft)">
<img src="../assets/photos/bio-1-bergamo.jpg" data-cap="Бергамо, Верхний город, апрель 2026" data-coord="45,70° с. ш., 9,67° в. д." alt="Кирилл на террасе в Верхнем городе Бергамо, за ним колокольни" class="on" aria-hidden="false" decoding="async">
<img src="../assets/photos/bio-2-lecco.jpg" data-cap="Над Лекко, май 2026" data-coord="45,86° с. ш., 9,44° в. д." alt="Кирилл у перил на горе над Лекко, внизу озеро и город" aria-hidden="true" decoding="async" loading="lazy" style="object-position: 50% 45%">
<img src="../assets/photos/bio-3-warsaw.jpg" data-cap="Варшава, Старый город, май 2026" data-coord="52,25° с. ш., 21,01° в. д." alt="Кирилл с литровой кружкой пива в варшавской пивной" aria-hidden="true" decoding="async" loading="lazy">
<img src="../assets/photos/bio-4-cdmx-roma.jpg" data-cap="Мехико, Рома-Норте, сентябрь 2026" data-coord="19,42° с. ш., 99,17° з. д." alt="Кирилл в полосатой рубашке в парке в Мехико, над ним грозовые тучи" aria-hidden="true" decoding="async" loading="lazy">
<img src="../assets/photos/bio-5-cdmx-chapultepec.jpg" data-cap="Мехико, Чапультепек, сентябрь 2026" data-coord="19,42° с. ш., 99,18° з. д." alt="Кирилл на террасе замка Чапультепек, за ним башни проспекта Реформы" aria-hidden="true" decoding="async" loading="lazy">
</div>
<figcaption style="margin-top: 12px">
<div aria-live="off" data-c-live class="lb" style="font-size: 17px; line-height: 1.4">Вид <span data-c-num class="num">1</span> из&#160;<span class="num">5</span>. <span data-c-cap>Бергамо, Верхний город, апрель 2026</span></div>
<div class="num" style="margin-top: 2px; font-size: 15px; color: var(--muted)"><span data-c-coord>45,70° с.&#160;ш., 9,67° в.&#160;д.</span></div>
<div role="group" aria-label="Управление фотографиями" style="display: flex; flex-wrap: wrap; gap: 4px 20px; margin-top: 10px; font-size: 17px">
<button type="button" class="tbtn" data-c="prev">Предыдущая</button>
<button type="button" class="tbtn" data-c="toggle" data-play="Продолжить" data-pause="Пауза">Пауза</button>
<button type="button" class="tbtn" data-c="next">Следующая</button>
</div>
</figcaption>
</figure>
```

`data-coord` пишется с обычными пробелами (атрибут). Фото не копировать: одни файлы на обе версии.

### 3.10 Правка `assets/site.js` (одна, обратно совместимая)

Сейчас текст кнопки зашит по-английски. Замени функцию `paint` в блоке карусели:

```js
    var playTxt = toggle.getAttribute('data-play') || 'Play';
    var pauseTxt = toggle.getAttribute('data-pause') || 'Pause';
    function paint() {
      toggle.textContent = paused ? playTxt : pauseTxt;
      live.setAttribute('aria-live', paused ? 'polite' : 'off');
    }
```

Английские страницы атрибутов не имеют и продолжают писать Play/Pause. Часы (`en-GB`, 24 ч) по-русски выглядят так же, менять не нужно. Тема (`kp-theme`) общая для обеих версий: переключил ночь на EN, на RU тоже ночь.

### 3.11 Что поменять в английской версии при запуске `/ru/`

1. `index.html`, ячейка Language: `Russian` → ссылка `<a href="ru/" lang="ru" hreflang="ru">Russian</a>`. Подпись «Italian and Russian versions are coming.» → «The Italian version is coming.»
2. На каждой EN-странице три строки `hreflang` (§3.3).
3. Спросить Кирилла: писать ли в EN-переключателе самоназвания (`English · Italiano · Русский`), как в RU. Сам не меняй.
4. `404.html` остаётся английской. Можно добавить строку «Страница не найдена. <a href="/ru/">На главную</a>», только если Кирилл попросит.

### 3.12 Обложка `ru/index.html`: отличия от EN кроме имени

- Подвал: `Лист 1, листов 4` и `Изменение Г, 02.11.2026` (класс `lb num`).
- Ячейка «Язык»: `English` (ссылка на `../index.html`, `lang="en" hreflang="en"`), `Italiano` (серый `span`, `aria-disabled="true"`), `Русский` (`class="cur" aria-current="true"`).
- Подписи листов (курсив `lb`): «Разные места, разные ремёсла. Сначала новое.», «От&#160;Ростова-на-Дону до&#160;Лекко, и&#160;языки, на&#160;которых я&#160;говорю.», «То, чего нет в&#160;резюме.»
- Часы: `data-clock="Europe/Rome"` с ярлыком «Лекко», `data-yours` с ярлыком «Ваше время».
- Сетка обложки `.cv` в одну колонку при ширине до 560 px. Это уже есть в EN, просто не потеряй.

---

## 4. Шаблон пустой русской страницы

Для листа, которого ещё нет в EN. Сначала сделай EN, потом скопируй. Если нужна только русская страница, начни с этого каркаса: это `notes.html` без содержимого.

```html
<body>
<div class="page ru" style="min-height: 100vh; background: var(--paper); color: var(--ink); -webkit-font-smoothing: antialiased; padding: clamp(6px, 1vw, 14px); box-sizing: border-box; overflow-x: clip; display: flex; flex-direction: column">
<div style="position: relative; flex: 1 0 auto; display: flex; flex-direction: column; width: 100%; max-width: calc(1440px + 2 * clamp(12px, 2vw, 28px)); margin: 0 auto; padding: clamp(12px, 2vw, 28px); border: 1px solid transparent; box-sizing: border-box">
<div style="position: relative; flex: 1 0 auto; display: flex; flex-direction: column; border: 1px solid var(--ink); box-sizing: border-box">

<!-- зоны: цифры сверху/снизу как в EN; буквы слева/справа кириллицей, столько, сколько в EN-версии листа -->
<div aria-hidden="true" class="num" style="position: absolute; left: 0; right: 0; top: calc(-1 * clamp(12px, 2vw, 28px)); height: clamp(12px, 2vw, 28px); display: flex; justify-content: space-around; align-items: center; font-size: 12px; font-style: italic; color: var(--faint)"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span></div>
<div aria-hidden="true" style="position: absolute; top: 0; bottom: 0; left: calc(-1 * clamp(12px, 2vw, 28px)); width: clamp(12px, 2vw, 28px); display: flex; flex-direction: column; justify-content: space-around; align-items: center; font-size: 12px; font-style: italic; color: var(--faint)"><span>А</span><span>Б</span><span>В</span><span>Г</span></div>
<!-- … нижняя и правая полосы так же … -->

<div style="flex: 1 0 auto; display: flex; flex-direction: column; padding: clamp(20px, 4vw, 56px) clamp(20px, 4vw, 56px) 0">
<header style="display: flex; flex-wrap: wrap; align-items: baseline; justify-content: flex-end; gap: 16px 40px">
<nav aria-label="Основная навигация" style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 32px; font-size: 19px">
<a href="index.html">Главная</a>
<a href="work.html">Работа</a>
<a href="bio.html">О&#160;себе</a>
<a href="notes.html" class="cur" aria-current="page">Заметки</a>
</nav>
</header>

<main style="flex: 1 0 auto">
<section style="padding: clamp(96px, 12vw, 176px) 0 clamp(72px, 8vw, 120px)">
<h1 class="disp" style="margin: 0; font-size: clamp(72px, 14vw, 210px); line-height: 0.86; letter-spacing: -0.005em">Заметки</h1>
<p class="lb" style="margin: 20px 0 0; font-size: 20px">Мелочи, которых нет в&#160;резюме.</p>
</section>
<!-- секции: h2.disp + содержимое -->
</main>

<!-- штамп §3.7 -->
</div>
</div>
</div>
</div>
</body>
```

---

## 5. Проверка перед коммитом

1. **Линтер текста:** `python3 tools/ru_lint.py ru/*.html`. Он ищет тире, прямые кавычки, забытый Michelangelus, обычный пробел после коротких слов, точку в координатах, N/E/W, пропущенную ё, email открытым текстом, Instagram и отсутствие `lang="ru"`. Пустой вывод не значит, что перевод хороший: перечитай текст глазами.
2. **Playwright** (как в CLAUDE.md, плюс русское):

```js
// node tools/ru_check.js  (playwright уже установлен глобально; сервер: python3 -m http.server 8000)
const { chromium } = require('playwright');
const pages = ['index', 'work', 'bio', 'notes', 'research'];
(async () => {
  const b = await chromium.launch();
  for (const theme of ['day', 'night']) for (const w of [320, 375, 768, 1024, 1440]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    await ctx.addInitScript(t => { try { localStorage.setItem('kp-theme', t); } catch (e) {} }, theme);
    const p = await ctx.newPage();
    for (const n of pages) {
      await p.goto(`http://localhost:8000/ru/${n}.html`);
      await p.waitForTimeout(3500);                       // имя и отчество успевают раскрыться
      const r = await p.evaluate(() => {
        const fs = document.fonts.check('16px "TT Marxiana Antiqua"') && document.fonts.check('italic 16px "TT Marxiana Antiqua"');
        const hs = document.documentElement.scrollWidth > innerWidth;
        const h1 = document.querySelector('h1'), box = h1.parentElement.getBoundingClientRect();
        const over = h1.scrollWidth > Math.ceil(box.width) + 1;
        const mid = document.querySelector('.mid');
        const clip = mid ? mid.scrollWidth > mid.clientWidth + 1 : false;
        const mail = [...document.querySelectorAll('[data-email]')].every(a => a.href.startsWith('mailto:'));
        const latinZone = [...document.querySelectorAll('[aria-hidden="true"] > span')].some(s => /^[A-Z]$/.test(s.textContent));
        return { fs, hs, over, clip, mail, latinZone, lang: document.documentElement.lang };
      });
      const bad = !r.fs || r.hs || r.over || r.clip || !r.mail || r.latinZone || r.lang !== 'ru';
      console.log(bad ? 'FAIL' : 'ok  ', theme, w, n, JSON.stringify(r));
      await p.screenshot({ path: `/tmp/ru-${n}-${w}-${theme}.png`, fullPage: true });
    }
    await ctx.close();
  }
  await b.close();
})();
```

3. **Глазами:** открой скриншоты 375 и 1440 в обеих темах. Смотри: не обрезано ли «Андреевич» снизу, есть ли пробел между «Кирилл» и «Андреевич», не висит ли одинокий предлог в конце строки, совпадает ли курсив с EN (ярлыки, email, подписи курсивом; координаты прямые).
4. **Паритет с EN:** на той же ширине EN- и RU-лист должны иметь одинаковые блоки в одинаковом порядке. Если в EN что-то поменялось после перевода, перенеси и в RU.

---

## 6. Как это делалось на канвасе (для понимания, не для копирования)

Русская версия собиралась на Claude Design canvas в формате `.dc.html`: шаблон с `{{дырками}}` плюс класс `Component extends DCLogic`, где `renderVals()` возвращает значения. В статике то же самое делает `site.js`:

| На канвасе (`RUM*.dc.html`) | В репозитории |
|---|---|
| `{{email}}`, `{{mailto}}` из `renderVals` | `<a data-email>` + `site.js` |
| `{{theme}}` + опрос `localStorage` каждые 800 мс | `data-theme` на `<html>` + inline-скрипт в `<head>` + событие `storage` |
| `{{lecco}}`, `{{yours}}` через `Intl.DateTimeFormat('ru-RU')` | `data-clock`, `data-yours` |
| `{{s0}}…{{s4}}`, `{{cap}}`, `{{coord}}`, `{{playLabel}}` | `img.on`, `data-cap`, `data-coord`, `data-play/pause` |
| `onMouseEnter="{{reveal}}"` + класс `.on` (отчество по наведению) | CSS-анимация при загрузке (как «A.» в EN после коммита 0356ca6) |
| Шрифты `/_blob/<id>` | `../assets/fonts/*.woff2` |

Найденные проблемы и решения:

- **Склеенное «КириллАндреевич».** Рантайм канваса выбрасывает текстовый узел, состоящий только из пробела (включая `&#160;`). Решение: `padding-left:.26em` на `span` отчества.
- **Обрезанная «д».** `overflow:hidden` на `.mid` резал выносные элементы. Решение: `padding-bottom:.32em; margin-bottom:-.32em`.
- **Растопыренные координаты.** `tabular-nums` в Kazimir/Marxiana делает запятую шириной с цифру. Решение: только `lining-nums`.
- **Мелкие ярлыки.** У Antiqua меньше x-height. Решение: `font-size-adjust:0.5`, кегли из EN не трогаем.
- **Исследование на телефоне.** Длинное слово не влезало в рамку. Решение: отдельный `clamp(36px, 9.6vw, 160px)`.
- **Вспышка при смене темы.** `transition` на `[data-theme]` давал на миг тёмный текст на тёмном. Решение: переключение мгновенное.
- **Проверка.** Локальная сборка показывала всё правильно, а в настоящем просмотрщике канваса отчество слипалось. Вывод: проверять там, где это увидит человек, то есть на `python3 -m http.server`, а после деплоя на andreevi.ch.

На канвасе в `RUM*` остались вещи, которые в репозитории уже изменены, и **переносить их не надо**: Instagram в подвале и штампе, Google Scholar на всех листах (теперь только на research), внешняя обрезная линия (`border: 1px solid var(--faint)` на втором контейнере, теперь `transparent`), тире в `<title>`, «О себе» и «2 из 4» с обычным пробелом.
