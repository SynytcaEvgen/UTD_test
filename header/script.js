

window.addEventListener('DOMContentLoaded', init);

function init() {

    let burgerBtn = document.querySelector('#burger-btn'),
        siteNav = document.querySelector('#site-navigation'),
        mainHeader = document.querySelector('#header-main');
        

    burgerBtn.addEventListener('click', function () {
        this.classList.toggle('burger-btn--active');
        siteNav.classList.toggle('header-main__navigation--opened');
        mainHeader.classList.toggle('header-main--overlay');

    })

    let linkWihtSubNav = document.querySelectorAll('.site-menu__item--has-subnav .js-site-menu-link'),
        closeBntSubNavMenu = document.querySelectorAll('.js-close-submenu');

    linkWihtSubNav.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(this.nextElementSibling);
            this.nextElementSibling.classList.add('site-menu__dropdown-container--opened');
        })
    });
    closeBntSubNavMenu.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.closest('.js-dropdown-container').classList.contains('site-menu__dropdown-container--opened')) {
                this.closest('.js-dropdown-container').classList.remove('site-menu__dropdown-container--opened');
            }
        })
    });

    mainHeader.addEventListener('click', function (e) {
        if (e.target.id !='burger-btn') {
            burgerBtn.classList.remove('burger-btn--active');
            siteNav.classList.remove('header-main__navigation--opened');
            this.classList.remove('header-main--overlay');
        }
    })
    
    
};