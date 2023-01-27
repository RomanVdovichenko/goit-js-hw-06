const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
let size = inputEl.value;

spanEl.style.fontSize = `${size}px`;
inputEl.addEventListener('input', () => {
  size = inputEl.value;
  spanEl.style.fontSize = `${size}px`;
});
