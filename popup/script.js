window.addEventListener('DOMContentLoaded', init);

function init() {
    const closeBnt = document.querySelector('.popup__close-btn');
    function closePopup(elem) {
        let popup = document.querySelector(elem);
        popup.classList.remove('popup_active');
        bodyScrollLock.enableBodyScroll(popup);
        
    };
    function showPopup(elem) {
        let popup = document.querySelector(elem);
        popup.classList.add('popup_active');
        bodyScrollLock.disableBodyScroll(popup);
    };
    function neverShow(acceptBtn) {
        let btn = document.querySelector(acceptBtn);
        btn.addEventListener('click', function (e) {
            if (localStorage.getItem('popupLoad')) {
                localStorage.setItem(populLoad, 0);
                closePopup('.popup')
            }
        });
    };
    closeBnt.addEventListener('click', ()=> closePopup('.popup'));
    neverShow('.popup__accept-btn');
    const popUpcar = document.querySelector('.popup');
    popUpcar.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup')) {
            this.classList.remove('popup_active');
            bodyScrollLock.enableBodyScroll(this);
        }
    });

    const populLoad = 'popupLoad';
    const threeDay = 86400e3 * 3;

    function getPopupTime(popupLoad) {
        let time = new Date().getTime();
        if (localStorage.getItem(popupLoad)!= 0 ) {
            time -= localStorage.getItem(popupLoad);
        } else if (localStorage.getItem(popupLoad) == 0) {
            time = 0;
        }
        else {
            localStorage.setItem(popupLoad, time);
        }
        return time;
    }
    if (getPopupTime(populLoad) > threeDay) { 
        showPopup('.popup');
        localStorage.setItem(populLoad, new Date().getTime());
    }
}