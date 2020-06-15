const inputRef = document.querySelector('#validation-input');
const newRef = Number(inputRef.attributes['data-length'].value);

inputRef.addEventListener('input', e => {
  if (Number(e.target.value.length) === newRef) {
    inputRef.classList = 'valid';
    return;
  }
  inputRef.classList = 'invalid';
});
