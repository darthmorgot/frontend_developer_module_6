var e=()=>{document.querySelector(".map__mask").classList.add("toggle")},o=()=>{let a=L.map("map").on("load",()=>{e()}).setView({lat:59.968322,lng:30.317359},17);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a);let t=L.icon({iconUrl:"./images/map-pin.svg",iconSize:[38,50],iconAnchor:[19,50]});L.marker({lat:59.968322,lng:30.317359},{icon:t,riseOnHover:!0}).addTo(a)};export{o as renderMap};
