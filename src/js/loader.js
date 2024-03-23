(() => {
  const refs = {
    loader: document.querySelector('#loader'),
  };

  window.addEventListener('load', () => {
    setTimeout(() => {
      refs.loader.classList.add('loader-wrapper-hidden');
    }, 500);
  });
})();
