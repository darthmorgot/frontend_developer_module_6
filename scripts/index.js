function s(){let n=document.querySelector(".header"),e=document.querySelector(".nav__menu-button"),o=document.querySelector(".nav__list");n.classList.remove("header--nojs"),e.addEventListener("click",()=>{for(let t=0;t<e.children.length;t++)e.children[t].classList.contains("toggle")?(e.children[t].classList.remove("toggle"),a(e,"nav__menu-button--open","nav__menu-button--close")):(e.children[t].classList.add("toggle"),a(e,"nav__menu-button--close","nav__menu-button--open"));o.classList.toggle("toggle")})}function a(n,e,o){n.classList.remove(e),n.classList.add(o)}var i=()=>{document.querySelector(".map__mask").classList.add("toggle")},r=()=>{let n=L.map("map").on("load",()=>{i()}).setView({lat:59.968322,lng:30.317359},17);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n);let e=L.icon({iconUrl:"./images/map-pin.svg",iconSize:[38,50],iconAnchor:[19,50]});L.marker({lat:59.968322,lng:30.317359},{icon:e,riseOnHover:!0}).addTo(n)};s();r();
