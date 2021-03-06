---
title: "Лента инстаграма на сайте с помощью js"
date: "2018-10-28"
descr: "Привет! В этой статье расскажу о том, как сделать ленту из инстаграма у себя на сайте"
description: "В этой статье расскажу о том, как сделать ленту из инстаграма у себя на сайте"
cover: "img/cover.jpg"
cat: JS
video: "https://www.youtube.com/embed/0xOLtBzPv3g"
sources: "https://github.com/maxdenaro/maxgraph-youtube-source/tree/master/JS-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B%20%E2%84%9615.%20%D0%9B%D0%B5%D0%BD%D1%82%D0%B0%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%B0%20-%20InstagramFeed.js"
---

## Предыстория

Возможно, вы&nbsp;попали на&nbsp;данную страницу по&nbsp;ссылке на&nbsp;плагин __instafeed.js__. Я&nbsp;действительно делал ранее статью на&nbsp;эту тему, и&nbsp;даже видео на&nbsp;ютубе, однако решил обновить информацию. Плюс ко&nbsp;всему, instafeed лично у&nbsp;меня рано или поздно отваливался с&nbsp;сайта и&nbsp;переставал работать, да&nbsp;и&nbsp;был на&nbsp;jQuery.

Сейчас, садясь перезаписывать информацию, я&nbsp;столкнулся с&nbsp;тем, что работать с&nbsp;ним еще сложнее чем раньше: нужно получить токен, создать приложение, и&nbsp;сделать еще несколько довольно нудных вещей для работы плагина.

И&nbsp;я&nbsp;решил отказаться от&nbsp;него и&nbsp;поискать решение лучше. И&nbsp;нашел.

Мы&nbsp;будем использовать простой и&nbsp;удобный плагин&nbsp;&mdash; <a href="https://github.com/jsanahuja/InstagramFeed" target="_blank">InstagramFeed.js</a>. Он&nbsp;не&nbsp;требует никаких токенов, только название инстаграм-аккаунта.

<div class="note">
  <p>
    <strong>Примечание:</strong> У&nbsp;данного плагина есть ограничение&nbsp;&mdash; больше 12ти фотографий он&nbsp;выводить не&nbsp;умеет. Но, как правило, на&nbsp;сайтах просто выводят последние&nbsp;8, а&nbsp;дальше уж&nbsp;перейдите в&nbsp;инсту сами и&nbsp;посмотрите)
  </p>
</div>

Однако стоит понимать, что у&nbsp;данного плагина есть ограничение&nbsp;&mdash; больше 12ти фотографий он&nbsp;выводить не&nbsp;умеет. Но, как правило, на&nbsp;сайтах просто выводят последние&nbsp;8, а&nbsp;дальше уж&nbsp;перейдите в&nbsp;инсту сами и&nbsp;посмотрите)

Выше есть видео, если не&nbsp;устраивает текст&nbsp;&mdash; можете глянуть его. Плюс ко&nbsp;всему, там я&nbsp;показываю вариант с _кастомным_ html-кодом для ленты инстаграма, чего не&nbsp;будет в&nbsp;статье.

Давайте по&nbsp;порядку, с&nbsp;html.

## HTML

``` html
<div id="insta"></div>
```

Просто див для вывода фотографий.

## JS

Не забудьте подключить файл __instagramfeed.min.js__ к вашему html.

``` js
new InstagramFeed({
  'username': 'ваш_юзернейм',
  'container': document.getElementById("insta"),
  'display_profile': false,
  'display_biography': false,
  'display_gallery': true,
  'display_captions': true,
  'styling': true,
  'items': 8,
  'items_per_row': 4,
  'margin': 1
});
```

Самое важное, что нам тут нужно передать&nbsp;&mdash; это правильный селектор для контейнера, а&nbsp;так&nbsp;же правильный _username_. Остальное уже&nbsp;&mdash; просто примеры, где вы&nbsp;можете показать информацию пользователя, его профиль, подписи к&nbsp;изображениям и&nbsp;т.д.

<div class="note">
  <p>
    <strong>Примечание:</strong> поскольку плагин использует запросы к&nbsp;инстаграму, запустить просто html-файл в&nbsp;браузере не&nbsp;выйдет. Обязательно нужен локальный сервер (Live Server или Browsersync) или хостинг.
  </p>
</div>

Как я&nbsp;и&nbsp;писал выше, для создания кастомного html-кода инстаграм-ленты нужно потрудиться, и&nbsp;как именно это сделать я&nbsp;рассказал в&nbsp;видео выше. Пользуйтесь!
Ниже&nbsp;&mdash; ссылка на&nbsp;github, для вашего удобства.

До&nbsp;встречи!
