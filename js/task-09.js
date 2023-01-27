const color = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const hexColor = getRandomHexColor();
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
