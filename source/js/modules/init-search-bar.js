const manageSearchBar = () => {
  const formWithInput = document.querySelectorAll('[data-input]');

  formWithInput.forEach((el) => {
    el.addEventListener('input', () => {
      const btnClear = el.querySelector('[data-btn-reset]');

      if (btnClear) {
        btnClear.style.display = 'block';
        btnClear.addEventListener('click', () => {
          el.reset();
        });

        document.addEventListener('click', () => {
          el.reset();
          btnClear.style.display = 'none';
        });
      }
    });
  });
};

export {manageSearchBar};
