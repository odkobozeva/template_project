
// initSlider();

// // mobile menu
// $('.toggle-menu').on('click', function() {
//     let menu = $(this).parents('.header__content'),
//         body = $(this).parents('body');

//     menu.toggleClass('header__content_open');
//     body.toggleClass('no-scroll');
// });
// // END mobile menu

// const navMain = document.querySelector('.main-nav');
// const navToggle = document.querySelector('.page-header__toggle');
// // const pageHeader = document.querySelector('.page-header');

// // pageHeader.classList.remove('page-header--nojs');

// navToggle.addEventListener('click', function () {
//   navToggle.classList.toggle('page-header__toggle--opened');
//   navMain.classList.toggle('main-nav--closed');
// });




// $(window).on('resize', function(){
//   initSlider();
// });

// function initSlider() {
//   $('.js-carousel').slick({
//       dots: false,
//       arrow: true,
//       infinite: true,
//       speed: 300,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       responsive: [
//           {
//               breakpoint: 767,
//               settings: {
//                   arrow: false,
//                   variableWidth: true,
//                   infinite: false,
//               }
//           }
//       ]
//   });
// }

// //scroll header
// window.onscroll = () => {
//   const headScroll = document.querySelector('#header-scroll');
//   if(window.scrollY <= 10) headScroll.classList.remove('header-scroll'); else headScroll.classList.add('header-scroll');
// };
