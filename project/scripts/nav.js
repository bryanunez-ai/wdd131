const hamburgerBtn = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    hamburgerBtn.textContent = menu.classList.contains("open") ? "✕" : "☰";
});

hamburgerBtn.setAttribute("aria-expanded", menu.classList.contains("open"));