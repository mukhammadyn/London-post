const elNavTogglerBtn = document.querySelector('.js-header-nav-toggler');
const elHeaderNav = document.querySelector('.site-header__nav');

function navigationToggler() {
  elHeaderNav.classList.toggle('site-header__nav--active');
}

if(elNavTogglerBtn) {
  elNavTogglerBtn.addEventListener('click', navigationToggler);
}
