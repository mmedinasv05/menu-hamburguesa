import hamburguerMenu from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".section-menu-item", ".section-menu-item a");
});



window.addEventListener("scroll", () => {
    let menu = document.querySelector(".section-menu");

    menu.classList.toggle("sticky", window.scrollY > 0);
})