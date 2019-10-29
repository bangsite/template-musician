$(document).ready(function () {
  $('.menu__close').on('click', function (e) {
    $(this).toggleClass('open');
    $('.nav__collapse').toggleClass('show');
  });
});

const inputs = document.querySelectorAll('.input');
const validate = () => {
  let valid = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].validity.valid) {
      valid = true;
    } else {
      valid = false;
      break;
    }
  }
};

inputs.forEach(input => {
  input.addEventListener('keyup', () => {
    input.setAttribute('value', input.value);
    validate();
  });
});
