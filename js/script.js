// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  speed: 1000,
  effect: 'slide',

  // пагинация
  pagination: {
  el: '.swiper-pagination',
  clickable: true

  },
  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },

  });

  // tabs
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.how__steps-item').forEach(function(howStepsItem) {
      howStepsItem.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.how__tabs').forEach(function(howTabs) {
          howTabs.classList.remove('how__tabs-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('how__tabs-active')
      })
    })
  })

  // search

  const search = document.querySelector('.header__search-form');

  headerSearchForm.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.add('header__search--active');

  })
