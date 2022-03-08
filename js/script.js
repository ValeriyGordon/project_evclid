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

  // accordion
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: 'content',
      collapsible: 'true',
      active: false
    });
  });

  // search
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__search').addEventListener('click', function(){
    document.querySelector('#header__search-form').classList.toggle('is-active')
  })
})

// burger
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__burger').addEventListener('click', function(){
    document.querySelector('#header__list--adaptive').classList.toggle('is-active')
  })
})
