const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.dataset.length);
let inputLength = '';

inputEl.addEventListener('input', event => {
  inputLength = event.currentTarget.value;
});

inputEl.addEventListener('blur', () => {
  if (dataLength !== inputLength.length) {
    return inputEl.classList.add('invalid'), inputEl.classList.remove('valid');
  }
  inputEl.classList.add('valid');
  inputEl.classList.remove('invalid');
});
