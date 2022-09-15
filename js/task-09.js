function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
let currentColor = document.querySelector('.color');

const onChangeColorClick = () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  currentColor.textContent = bodyEl.style.backgroundColor;
}
changeColor.addEventListener('click', onChangeColorClick);