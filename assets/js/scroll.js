const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-scroll');
    } else {
        navbar.classList.remove('nav-scroll');
    }
};