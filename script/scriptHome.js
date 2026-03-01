
let header = document.getElementById('myNav');
let btns = header.getElementsByClassName('js-navBtn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active')
    if (current.length > 0) {
      current[0].classList.remove('active');
    }
    this.classList.add('active');
  });
}