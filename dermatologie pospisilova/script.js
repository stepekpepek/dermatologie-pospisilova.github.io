
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Zavřít navigaci" : "Otevřít navigaci"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
});

// Po kliknutí na odkaz menu zavřeme
mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Otevřít navigaci");
        menuToggle.textContent = "☰";
    });
});