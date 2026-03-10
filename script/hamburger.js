// const hamburger = document.getElementById('hamburger');
// const navShow = document.getElementById('myNav');

// // hamburger.addEventListener('click', () => {
// //   navShow.classList.toggle('show');
// // });

// function hamburgerShow() {
//   hamburger.classList.toggle("show");
// }
// navShow.onclick = hamburgerShow;

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});