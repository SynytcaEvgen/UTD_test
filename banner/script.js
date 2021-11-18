window.addEventListener('DOMContentLoaded', init);


function init() {
    
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });

    swiper.on('slideChangeTransitionEnd', function () {
        let activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide.querySelector('.slider-full__video_wrapper')) {
            activeSlide.querySelector('video').play();
        } else {
            document.querySelectorAll('.slider-full__video_wrapper video').forEach(item => item.pause());
        }
    });
    
}
