$(document).ready(function () {
  $('.menu__close').on('click', function (e) {
    $(this).toggleClass('open');
    $('.nav__collapse').toggleClass('show');
  });
});


