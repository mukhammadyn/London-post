const elNavTogglerBtn = document.querySelector('.js-header-nav-toggler');
const elHeaderNav = document.querySelector('.site-header__nav');

// SERVICES MODAL
const elServicesModalToggler = document.querySelector('.js-services-modal-toggler');
const elServicesModal = document.querySelector('.services-modal');
const elServicesModalClose = elServicesModal.querySelector('.js-service-modal-close-btn');
const elsServicesModalInput = elServicesModal.querySelectorAll('.services-modal__input');
const elModalNextPageBtn = elServicesModal.querySelector('.js-modal-next-btn');
const elServicesUserDataModal = elServicesModal.querySelector('.services-modal__user-data');
const elServicesOrderModal = elServicesModal.querySelector('.services-modal__order');

const elServicesOrderAddBtn = elServicesModal.querySelector('.js-services-add-btn');
const elServicesOrderBackBtn = elServicesModal.querySelector('.services-modal__back-btn');
const elServicesOrdersWrapper = elServicesModal.querySelector('.services-modal__user-order-wrapper');
const elServicesOrders = elServicesModal.querySelector('.services-modal__user-orders');
const elServicesOrderInput = elServicesModal.querySelectorAll('.services-modal__order-input');



function navigationToggler() {
  elHeaderNav.classList.toggle('site-header__nav--active');
}

function servicesModalToggler() {
  if(screen.width > 768) {
    elServicesModal.classList.add('services-modal--active');
  } else {
    elServicesModal.classList.add('services-modal--active');
    elHeaderNav.classList.remove('site-header__nav--active');
  }
}

function closeModal() {
  elServicesModal.classList.remove('services-modal--active');
}

if(elNavTogglerBtn) {
  elNavTogglerBtn.addEventListener('click', navigationToggler);
}

if(elServicesModalToggler) {
  elServicesModalToggler.addEventListener('click', (evt) => {
    evt.preventDefault();
    servicesModalToggler();
  });
}

if(elServicesModalClose) {
  elServicesModalClose.addEventListener('click', closeModal);
}

if(elModalNextPageBtn) {
  elModalNextPageBtn.addEventListener('click', function() {
    for(let input of elsServicesModalInput) {
      if (input.value == '') {
        return;
      }
    }
    elServicesOrderModal.classList.add('services-modal__order--open');
    elServicesUserDataModal.classList.add('services-modal__user-data--close');
  })
}

if(elServicesOrderBackBtn) {
  elServicesOrderBackBtn.addEventListener('click', function() {
    elServicesOrderModal.classList.remove('services-modal__order--open');
    elServicesUserDataModal.classList.remove('services-modal__user-data--close');
  })
}

// if(elServicesOrderAddBtn) {
//   elServicesOrderAddBtn.addEventListener('click', dublicateOrdersForm);
// }
