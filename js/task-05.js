const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');
const name = nameEl.textContent;

inputEl.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    return (nameEl.textContent = name);
  }
  nameEl.textContent = event.currentTarget.value;
});
