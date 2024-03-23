(() => {
  const refs = {
    modalBtnOpen: document.querySelector('#modalBntOpen'),
    modalBtnClose: document.querySelector('#modalBtnClose'),
    modalOverlay: document.querySelector('#modalOverlay'),
    modalNav: document.querySelector('#modalNav'),
  };

  refs.modalOverlay.addEventListener('click', handleModal);
  refs.modalBtnOpen.addEventListener('click', handleModal);
  refs.modalBtnClose.addEventListener('click', handleModal);

  function handleModal() {
    refs.modalOverlay.classList.toggle('mobile-nav__overlay-active');
    refs.modalNav.classList.toggle('mobile-nav-active');
    document.body.classList.toggle('no-scroll');
    console.log(refs.modalOverlay.classList);
  }
})();
