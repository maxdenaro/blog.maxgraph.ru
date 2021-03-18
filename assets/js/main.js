document.addEventListener("DOMContentLoaded",()=>{if(document.querySelector(".main-page")){let t=15;const e=document.querySelector(".blog-more"),o=document.querySelectorAll(".blog-list__item").length;e.addEventListener("click",c=>{t+=12;const n=Array.from(document.querySelector(".blog-list").children).slice(0,t);n.forEach(t=>t.classList.add("is-visible")),n.length===o&&(e.style.display="none")})}}),document.addEventListener("DOMContentLoaded",()=>{if(document.querySelector(".post")){const e=document.querySelector(".post"),o=e.querySelectorAll("pre code"),c=e.querySelectorAll("pre");function t(t){if(document.selection)(e=document.body.createTextRange()).moveToElementText(t),e.select();else if(window.getSelection){var e;(e=document.createRange()).selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e)}}o.forEach(e=>{e.setAttribute("tabindex",0),e.addEventListener("click",(function(e){t(this)})),e.addEventListener("focus",(function(e){t(this)}))}),c.forEach(t=>{new SimpleBar(t)})}}),document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".search__input"),e=document.querySelector(".search__list"),o=document.querySelector(".search__dropdown");document.querySelector(".search__form").addEventListener("submit",t=>{t.preventDefault(),document.querySelector(".search__close").focus()});const c=new SimpleBar(e);let n,a="";const r=async()=>{e.querySelector(".simplebar-content").innerHTML="",await(async()=>{n=await fetch("/search-feed.json").then(t=>t.json())})(),n.posts.filter(t=>t.title.toLowerCase().includes(a.toLowerCase())).forEach(t=>{t.title?(c.recalculate(),o.style.display="block",e.querySelector(".simplebar-content").insertAdjacentHTML("afterbegin",`\n\t\t\t\t\t\t<li class="search__item">\n\t\t\t\t\t\t\t<article class="search-post">\n\t\t\t\t\t\t\t\t<a href="${t.url}" class="search-post__link">\n\t\t\t\t\t\t\t\t\t<div class="search-post__image">\n\t\t\t\t\t\t\t\t\t\t<span class="search-post__category">${t.cat}</span>\n\t\t\t\t\t\t\t\t\t\t<img src="${t.url}${t.cover}" alt="${t.title}">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="search-post__text">\n\t\t\t\t\t\t\t\t\t\t<h3 class="search-post__title">\n\t\t\t\t\t\t\t\t\t\t\t${t.title}\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t`)):o.style.display="none"})};t.addEventListener("keyup",t=>{a=t.target.value,a.length?r():o.style.display="none"})}),document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".search-btn"),e=document.querySelector(".search"),o=document.querySelector(".search__close"),c=document.querySelectorAll(".header");let n,a=27;e.inert=!0;const r=()=>{e.classList.add("search--active"),n=document.activeElement,(()=>{let t=window.innerWidth-document.body.offsetWidth+"px";c&&c.forEach(e=>{e.style.paddingRight=t}),document.body.style.paddingRight=t})(),(()=>{let t=window.scrollY;document.body.classList.add("disable-scroll"),document.body.dataset.position=t,document.body.style.top=-t+"px"})(),Array.from(document.body.children).forEach(t=>{t!==e&&(t.inert=!0)}),e.inert=!1,setTimeout(()=>{o.focus()},100),document.addEventListener("keydown",t=>{console.log(t.keyCode),t.keyCode==a&&l()})},l=()=>{e.classList.remove("search--active"),c&&c.forEach(t=>{t.style.paddingRight="0px"}),document.body.style.paddingRight="0px",(()=>{let t=parseInt(document.body.dataset.position,10);document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:t,left:0}),document.body.removeAttribute("data-position")})(),Array.from(document.body.children).forEach(t=>{t!==e&&(t.inert=!1)}),e.inert=!0;document.querySelector(".search__input").value="",setTimeout(()=>{n.focus()},300)};t.addEventListener("click",()=>{r()}),o.addEventListener("click",()=>{l()})}),Array.from(document.querySelectorAll("[data-social]")).forEach(t=>{t.addEventListener("click",()=>{let t=location.origin+location.pathname;switch(event.currentTarget.dataset.social){case"facebook":Share.facebook(t);break;case"vk":Share.vk(t);break;case"twitter":Share.twitter(t)}})}),document.addEventListener("DOMContentLoaded",()=>{const t=document.documentElement,e=document.querySelector(".theme-switch"),o=e.querySelectorAll(".theme-switch__icon");null===localStorage.getItem("theme")&&localStorage.setItem("theme","dark");const c=c=>{(t=>{o&&(o.forEach(t=>t.classList.remove("theme-switch__icon--active")),"light"===t&&e.querySelector(".dark").classList.add("theme-switch__icon--active"),"dark"===t&&e.querySelector(".light").classList.add("theme-switch__icon--active"))})(c),"light"===localStorage.getItem("theme")&&(t.style.setProperty("--scheme","light"),document.documentElement.classList.add("light-theme"),localStorage.setItem("theme","light")),"dark"===localStorage.getItem("theme")&&(t.style.setProperty("--scheme","dark"),document.documentElement.classList.remove("light-theme"),localStorage.setItem("theme","dark"))};c(localStorage.getItem("theme")),e.addEventListener("click",()=>{let t=localStorage.getItem("theme");console.log(t),"dark"===t?(localStorage.setItem("theme","light"),c("light")):"light"===t&&(localStorage.setItem("theme","dark"),c("dark"))})});