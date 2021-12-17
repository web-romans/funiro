var header = document.querySelector('.header');
var headerBurger = document.querySelector('.burger');
var headerMenu = document.querySelector('.nav');
var search = document.querySelector('.search-form');
var userbox = document.querySelector('.userbox');
//var overlay = document.getElementById('nav');
//var btns = document.getElementById('btns');

headerBurger.addEventListener('click', function () {
    header.classList.toggle("mobile")
    this.classList.toggle("close");
    headerMenu.classList.toggle("open");
    search.classList.toggle("mobile");
    userbox.classList.toggle("mobile")
    //overlay.classList.toggle("overlay");
    //btns.classList.toggle("mobile");
});

/* Меню фикс при ресайзе */
window.addEventListener('resize', function (event) {
    if (window.innerWidth >= 980) {
        header.classList.remove("mobile")
        headerBurger.classList.remove("close");
        headerMenu.classList.remove("open");
        search.classList.remove("mobile");
        userbox.classList.remove("mobile")
    }
}, true);


var heroSwiper = new Swiper(".hero-swiper", {

    centeredSlides: true,
    spaceBetween: 32,
    loop: true,
    loopedSlides: 5,
    slideClass: "hero-swiper__slide",
    navigation: {
        nextEl: ".hero-swiper__button--next",
        prevEl: ".hero-swiper__button--prev",
    },
    pagination: {
        el: ".hero-swiper__pagination",
        clickable: true,
    },
    /*
    breakpoint: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            navigation: true,
            pagination: true,
        },
        560: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        980: {
            slidesPerView: "auto",
            centeredSlides: true,
        }
    }
    */
});