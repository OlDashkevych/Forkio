const burger = document.querySelector('.nav-burger-lines');
const list = document.querySelector('.header__list');
const topLine = document.querySelector('.nav-burger-line--top');
const bottomLine = document.querySelector('.nav-burger-line--bottom');
const middleLine = document.querySelector('.nav-burger-line--middle');

const toggle = e => {
  e.stopPropagation();
  list.classList.toggle('visible');
  // ============================
  burger.classList.toggle('linesOn');
  topLine.classList.toggle('topLineOn');
  middleLine.classList.toggle('middleLineOn');
  bottomLine.classList.toggle('bottomLineOn');
};

const closeMenu = ({ target }) => {
  if (target === burger || target === list) return;
  list.classList.remove('visible');
  // ============================
  burger.classList.remove('linesOn');
  topLine.classList.remove('topLineOn');
  middleLine.classList.remove('middleLineOn');
  bottomLine.classList.remove('bottomLineOn');
};

const foo = e => {
  e.stopPropagation();
};

burger.addEventListener('click', toggle);
document.addEventListener('click', closeMenu);
list.addEventListener('click', foo);
