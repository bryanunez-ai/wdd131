const hamburgerBtn = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

function openMenu() {
    menu.classList.add("open");
    document.body.classList.add("no-scroll");
    hamburgerBtn.textContent = "✕";
    hamburgerBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    menu.classList.add("closing");
    document.body.classList.remove("no-scroll");
    hamburgerBtn.textContent = "☰";
    hamburgerBtn.setAttribute("aria-expanded", "false");
    menu.addEventListener("animationend", () => {
        menu.classList.remove("open", "closing");
    }, { once: true });
}

hamburgerBtn.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
});