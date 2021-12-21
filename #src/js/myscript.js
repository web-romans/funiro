var header = document.querySelector('.header');
var headerBurger = document.querySelector('.burger');
var headerMenu = document.querySelector('.nav');
var search = document.querySelector('.search-form');
var userbox = document.querySelector('.userbox');

var rooms = document.querySelector('.rooms__container');

var mobileSelect = document.querySelectorAll('.footer__menu-item');
//var overlay = document.getElementById('nav');
//var btns = document.getElementById('btns');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) header.classList.add("fixed")
    else header.classList.remove("fixed")
});


for (var i = 0; i <= mobileSelect.length; i++) {
    if (mobileSelect[i]) {
        mobileSelect[i].addEventListener('click', function () {
            this.classList.toggle("open");
            this.querySelector(".footer__sub-menu").classList.toggle("open");
        });
    }

}


function roomsWidth() {
    var maxWidth = document.body.clientWidth;
    if (window.innerWidth >= 1280) {
        var offsetRooms = (maxWidth - 1246) / 2;
        rooms.style.marginLeft = offsetRooms + 'px';
        rooms.style.width = (maxWidth - offsetRooms) + 'px';

    } else {
        rooms.style.marginLeft = 0 + 'px';
        rooms.style.width = maxWidth + 'px';
    }
    console.log(rooms.style.width);

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

var tipsSwiper = new Swiper(".tips-slider", {
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    loopedSlides: 55,
    slideClass: "tips-slider__slide",
    pagination: {
        el: ".tips-slider__pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".tips-slider__button--next",
        prevEl: ".tips-slider__button--prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        560: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    }
});


var setupsSwiper = new Swiper(".setups-slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freemode: true,
    slideClass: "setups-slider__slide"
});

