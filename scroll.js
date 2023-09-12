// Detecta cuando se hace scroll hacia abajo
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        document.header.classList.add("scrolled");
    } else {
        document.header.classList.remove("scrolled");
    }
});
