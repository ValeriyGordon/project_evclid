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

// document.addEventListener("DOMContentLoaded", function () {
//   // Burger menu
//   const burger = document.getElementById("header__burger");
//   const list = document.querySelector(".header__list");

//   function closeMenu() {
//     burger.classList.remove("is-active");
//     list.classList.remove("header__list--adaptive");
//   }

//   function openMenu() {
//     burger.classList.add("is-active");
//     list.classList.add("header__list--adaptive");
//   }

//   document.body.addEventListener("click", (e) => {
//     const target = e.target;
//     if (
//       !target.closest(".header__burger") &&
//       !target.classList.contains("header__list--adaptive")
//     ) {
//       closeMenu();
//     }
//   });

//   burger.addEventListener("click", () => {
//     if (burger.classList.contains("is-active")) {
//       closeMenu();
//       return;
//     }

//     openMenu();
//   });

//   window.addEventListener("resize", () => {
//     closeMenu();
//   });
// })
