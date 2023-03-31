const navbar = document.getElementById('navbar')
const navbarheight = navbar.clientHeight;

window.addEventListener('scroll', function() {
    if (this.window.scrollY >= navbarheight) {
        navbar.classList.add('navbar-expanded');
    } else {
        navbar.classList.remove('navbar-expanded');
    }
});