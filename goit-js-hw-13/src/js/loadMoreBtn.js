import refs from './refs';

export default {
  show() {
    refs.btn.disabled = false;
    refs.btn.classList.remove('is-hiden');
    refs.btnLable.textContent = 'Load more';
    refs.spinner.classList.add('is-hiden');
  },
  hide() {
    refs.btn.disabled = true;
    refs.btnLable.textContent = 'Loading...';
    refs.spinner.classList.remove('is-hiden');
  },
};
