// Detecta cuando se hace scroll hacia abajo
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});