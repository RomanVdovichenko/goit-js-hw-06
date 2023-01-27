const divEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
const inputEl = divEl.querySelector('input');
const createBtn = divEl.querySelector('button[data-create]');
const destroyBtn = divEl.querySelector('button[data-destroy]');
const arr = [];
let px = 30;

createBtn.addEventListener('click', createBoxes.bind());

destroyBtn.addEventListener('click', destroyBoxes.bind());

function createBoxes() {
  for (let i = 1; i <= Number(inputEl.value); i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${px}px`;
    boxEl.style.height = `${px}px`;
    boxEl.style.backgroundColor = `${getRandomHexColor()}`;
    arr.push(boxEl);
    px += 10;
  }
  boxesEl.append(...arr);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  px = 30;
  arr.splice(0, arr.length);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
