function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},n={},l=t.parcelRequire94c2;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire94c2=l),(0,l.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,n=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)n.set(t[o],{baseUrl:e,path:t[o+1]})}}),l("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["auyDg","index.49390e2a.js","lhkgP","logo-light.10f0f968.svg","7uT5W","logo-dark.73114e35.svg"]'));var r={};r=new URL("logo-light.10f0f968.svg",import.meta.url).toString();var a={};a=new URL("logo-dark.73114e35.svg",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelectorAll(".section"),o=document.querySelectorAll(".nav-button"),n=document.querySelectorAll(".menu-nav-item"),l=e=>{console.log(`Switching to section: ${e}`),t.forEach(e=>{e.classList.remove("active")}),[...o,...n].forEach(e=>{e.classList.remove("active")});let l=document.getElementById(e);l?(l.classList.add("active"),l.scrollIntoView({behavior:"smooth"}),console.log(`Activated section: ${e}`)):console.error(`Section with id "${e}" not found.`),[...o,...n].forEach(t=>{t.getAttribute("data-target")===e&&(t.classList.add("active"),console.log(`Activated button: ${t.textContent}`))})};[...o,...n].forEach(e=>{let t=e.getAttribute("data-target");t&&e.addEventListener("click",o=>{o.preventDefault(),console.log(`Navigation button clicked: ${e.textContent}`),l(t),i&&i.open&&(i.close(),console.log("Menu closed after navigation."))})});let c=document.getElementById("menu-button"),i=document.getElementById("nav-menu");c&&i?c.addEventListener("click",e=>{console.log("Menu button clicked."),i.open=!i.open,console.log(`Menu is now ${i.open?"open":"closed"}.`)}):console.error("Menu button or nav-menu not found in the DOM.");let d=()=>{let t=document.getElementById("logo-image"),o=document.documentElement.classList.contains("dark-theme");t?(t.src=o?/*@__PURE__*/e(a):/*@__PURE__*/e(r),console.log(`Logo updated to: ${t.src}`)):console.error("Logo image element not found.")},s=document.getElementById("toggle-theme");s?s.addEventListener("click",()=>{document.documentElement.classList.toggle("dark-theme");let e=document.documentElement.classList.contains("dark-theme");s.querySelector(".material-symbols-outlined").textContent=e?"light_mode":"dark_mode",localStorage.setItem("theme",e?"dark":"light"),console.log(`Theme toggled to: ${e?"dark":"light"}`),d()}):console.error("Toggle theme button not found in the DOM."),"dark"===localStorage.getItem("theme")?(document.documentElement.classList.add("dark-theme"),s&&(s.querySelector(".material-symbols-outlined").textContent="light_mode"),console.log("Initialized theme to dark.")):(document.documentElement.classList.remove("dark-theme"),s&&(s.querySelector(".material-symbols-outlined").textContent="dark_mode"),console.log("Initialized theme to light.")),d(),l("home")});
//# sourceMappingURL=index.49390e2a.js.map
