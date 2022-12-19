const hamburger = document.querySelector(".hamburgur")
const navsub = document.querySelector(".nav-sub");
hamburger.addEventListener('click', () => {
hamburger.classList.toggle("change")
navsub.classList.toggle("nav-change")
});