---
title: "Инверсия цвета на css"
date: "2018-09-06"
descr: "Привет! Расскажу сегодня об инверсии цвета при наведении на текст, например)"
description: "Рассказываю о простом и интересном свойства - mix-blend-mode, для инверсии цвета"
cover: "img/cover.jpg"
cat: HTML/CSS
---

<video muted autoplay playsinline controls src="/assets/video/inversion.mp4"></video>

Видели когда-нибудь такой эффект?) Думаю, кто-нибудь да видел.

Создан он очень просто - всего лишь с использованием css-свойства.

[Прочесть о свойстве](https://developer.mozilla.org/ru/docs/Web/CSS/mix-blend-mode) можете тут.

Это свойство `mix-blend-mode`. В данном конкретном случае нужно использовать код:

``` css
.link {
  mix-blend-mode: difference;
}
```

Тогда у вас так же красиво будет инвертироваться цвет.

 

А как сделать кружочек у мышки, чтоб он всегда был как курсор - уже тема отдельного поста. Если нужно - ставьте лайк, расскажу об этом)