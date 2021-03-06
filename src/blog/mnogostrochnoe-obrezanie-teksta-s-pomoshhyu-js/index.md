---
title: "Многострочное обрезание текста с помощью js"
date: "2019-05-09"
descr: "Привет! В этой статье расскажу о том, как легко обрезать текст после нескольких строк. Полезно для карточек товара в интернет-магазинах"
description: "В этой статье расскажу о том, как легко обрезать текст после нескольких строк. Полезно для карточек товара в интернет-магазинах"
cover: "img/cover.jpg"
cat: JS
video: "https://www.youtube.com/embed/MUZvekTFH-4"
sources: "https://github.com/maxdenaro/maxgraph-youtube-source/tree/master/JS-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B%20%E2%84%9614.%20%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0%20-%20Ellipsis.js"
---

Мы&nbsp;будем использовать простой и&nbsp;удобный плагин&nbsp;&mdash; <a href="https://github.com/glinford/ellipsis.js/" target="_blank">Ellipsis.js</a>. Выше есть видео, если не&nbsp;устраивает текст&nbsp;&mdash; можете глянуть его :)

Ранее я использовал плагин dotdotdot.js, и вы наверняка пришли сюда по ссылке на него, но сейчас не использую jQuery и не советую вам, поэтому - плагин на чистом js.

Давайте по порядку, с html.

## HTML

``` html
<p class="clamp">
  Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. То языкового, агентство не буквоград щеке своих,
  проектах несколько прямо семантика на берегу коварных текстами пустился страна всемогущая пунктуация ты ведущими назад, дорогу предложения
  грамматики пор? Ручеек возвращайся назад осталось семантика эта она дал речью взгляд себя проектах? Свой бросил дорогу ipsum возвращайся жизни
  которое, заглавных всеми необходимыми коварных выйти послушавшись безопасную алфавит решила текста сих залетают домах назад правилами
  повстречался lorem. Все коварных залетают грамматики пояс лучше ведущими меня, по всей ручеек деревни страна домах алфавит рыбного
  подпоясал живет не города курсивных прямо маленькая обеспечивает рыбными там скатился моей? Инициал, даже?
</p>
```

Тут у нас простой параграф с классом `.clamp`. Этот класс написан не случайно, его плагин использует по умолчанию. Теперь давайте подключим плагин и напишем js-код

## JS

``` js
Ellipsis();
```

Вот такой простейший код нужен, чтобы плагин уже работал. Использование класса `.clamp` и данного кода делает обрезание по двум строчкам. <a href="https://glinford.github.io/ellipsis.js/" target="_blank">Демка</a>

Плагин автоматически поймет, если вы добавите и большее количество элементов с данным классом, поэтому переживать нечего.

Но что, если мы хотим сделать другой класс, или что-либо еще? У плагина есть небольшое, но достаточное количество настроек. Рассмотрим на примере кода:

``` js
Ellipsis({
  ellipsis: '…', // символ, который добавится после обрезанного текста
  debounce: 300, // задержка изменения обрезания при сжатии сайта (для оптимизации)
  responsive: true, // адаптивно обрезать текст или нет
  className: '.text', // класс для элемента
  lines: 4, // сколько линий должно быть видно
  portrait: null, // тут можно передать количество линий для портретного режима
  break_word: false // определять, как обрезать текст - оставлять обрезанное слово или нет
});
```

Очень простой плагин, который действительно круто работает и не требует от вас каких-то ухищрений в подключении. Пользуйтесь!
Ниже - ссылка на github, где есть демо-кода, а в начале статьи - видео обзор плагина для вашего удобства.

До встречи!
