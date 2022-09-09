const hamburgerMenu = document.querySelector('.menu-icon');
const container = document.querySelector('.container');

hamburgerMenu.addEventListener('click', () => {
  container.classList.toggle('active-container');
});

const yearEl = document.querySelector('.year');
const currYear = new Date().getFullYear();

yearEl.innerHTML = currYear;