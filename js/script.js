"use strict";

/* ---SIDE-MENU--- */
document.querySelector('.burger').addEventListener('click', function (event) {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.header__navigation').classList.toggle('active');
    event.stopPropagation();
})

let click = new Event("click");
document.documentElement.addEventListener("click", function (e) {
    const sidebar = document.querySelector('.header__navigation');
    if (sidebar.classList.contains('active')) {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.header__navigation').classList.toggle('active');
    }
})


/* --- TABS CLICK --- */
const tabs = document.querySelector(".main__tabs");
tabs.addEventListener("click", function (e) {
    e.preventDefault();
    const tabList = tabs.children;
    Array.from(tabList).forEach(tab => {
        tab.classList.remove("active");
    })
    e.target.closest(".main__tab").classList.add("active");
})


/* --- FAKE ROUTING --- */
const links = Array.from(document.body.getElementsByTagName(`A`));
links.forEach((link) => {
    link.addEventListener("click", function (e) {
        if (!e.target.closest("LI").classList.contains("main__tab")) {
            alert("Fake routing");
            e.preventDefault();
        }
    })
})

/* --- FAKE SUBSCRIBE --- */
const subForm = document.querySelector(".subscribe__form");
subForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const response = document.querySelector(".subscribe__input").value;
    const data = "Fake subscription on email " + response;
    confirm(data);
});

