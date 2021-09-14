const menuVisibility = () => {
    document.querySelector('body').classList.toggle('body-noScroll')
    document.querySelector('#menu-wrapper').classList.toggle('menu-visible');
}

document.querySelector('#burger').addEventListener('click', menuVisibility);
window.addEventListener('resize', function () {
    if(window.innerWidth > 768) {
        document.querySelector('body').classList.remove('body-noScroll')
    }
})