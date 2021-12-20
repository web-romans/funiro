var header = document.querySelector('.header');
var headerBurger = document.querySelector('.burger');
var headerMenu = document.querySelector('.nav');
var search = document.querySelector('.search-form');
var userbox = document.querySelector('.userbox');


var rooms = document.querySelector('.rooms__container');
//var overlay = document.getElementById('nav');
//var btns = document.getElementById('btns');

function roomsWidth() {
    if (window.innerWidth >= 1280) {
        var maxWidth = document.body.clientWidth;
        var offsetRooms = (maxWidth - 1246) / 2;
        rooms.style.marginLeft = offsetRooms + 'px';
        rooms.style.width = (maxWidth - offsetRooms) + 'px';
    }

}

roomsWidth();


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
    roomsWidth();
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
    }

});

var roomsSwiper = new Swiper(".rooms-slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    loopedSlides: 5,
    slideClass: "rooms-slider__slide",
    pagination: {
        el: ".rooms-slider__pagination",
        clickable: true,
    }
});