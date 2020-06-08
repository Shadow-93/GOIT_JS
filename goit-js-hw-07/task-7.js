const sizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sizeRef.addEventListener('change', e => {
  textRef.style.fontSize = `${e.target.value}px`;
});
