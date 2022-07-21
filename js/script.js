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


/* --- BLOCK ANIMATION --- */
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; ++i) {
            const animItem = animItems[i];
            const animItemHeigth = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;
            const animItemPoint = (animItemHeigth > window.innerHeight) ?
                window.innerHeight - window.innerHeight / animStart
                :
                window.innerHeight - animItemHeigth / animStart;


            if ((pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeigth))) {
                animItem.classList.add(`_active`);
            } else if (animItem.classList.contains("_anim-repeat")) {
                animItem.classList.remove(`_active`);
            }
        }
    }

    function offset(element) {
        const rect = element.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

/* --- FAKE ROUTING --- */
const links = Array.from(document.body.getElementsByTagName(`A`));
links.forEach((link) => {
    link.addEventListener("click", function (e) {
        if (!e.target.classList.contains("footer__email")) {
            alert("Fake routing");
            e.preventDefault();
        }
    })
})