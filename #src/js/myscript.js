
var navItem = document.querySelectorAll('.nav__item');

for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', showSubMenu);
    console.log(navItem[i]);
}

function showSubMenu() {
    var subMenu = this.querySelector('sub-menu');
    if (subMenu) {
        if (subMenu.classList.contains('sub-menu--show')) {
            subMenu.classList.remove('sub-menu--show');
        } else {
            subMenu.classList.add('sub-menu--show');
        }
    }
}
