(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=()=>{const c=document.querySelector(".header__mobile-btn"),r=document.querySelector(".mobile-nav"),n=document.querySelectorAll(".mobile-nav__menu-link");let o=!1;console.log(o),c.addEventListener("click",()=>{console.log("click"),o=!o,console.log(o),o?r.style.display="flex":r.style.display="none"}),n.forEach(e=>{e.addEventListener("click",()=>{o=!o,console.log(o),r.style.display="none"})})};l();