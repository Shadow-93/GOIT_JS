const inputRef = document.querySelector('#validation-input');
const newRef = inputRef.attributes['data-length'].value;

inputRef.addEventListener('change', e => {
  if (e.target.value.length < newRef) {
    inputRef.classList = 'invalid';
    return;
  }
  inputRef.classList = 'valid';
});
