// Detecta cuando se hace scroll hacia abajo
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header--custom-background");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
