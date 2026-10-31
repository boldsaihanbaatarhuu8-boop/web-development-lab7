
const theme = document.getElementById("theme");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// Dark mode
theme.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme.textContent = "Light mode";
    } else {
        theme.textContent = "Dark mode";
    }
});

// Гар утасны цэс
menu.addEventListener("click", function () {
    nav.classList.toggle("open");
});
const theme = document.getElementById("theme");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    theme.textContent =
        document.body.classList.contains("dark")
        ? "Light mode"
        : "Dark mode";
});

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
});