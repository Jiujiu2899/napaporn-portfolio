
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("myNav");
const navLi = document.querySelectorAll("#myNav .js-navBtn");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

navLi.forEach(el => {
  el.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});