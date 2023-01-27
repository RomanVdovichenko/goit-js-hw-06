const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = 0;

const increment = () => {
  counter.textContent = counterValue += 1;
};

const decrement = () => {
  counter.textContent = counterValue -= 1;
};

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);
