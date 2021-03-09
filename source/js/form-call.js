let formCallActivate = document.querySelector('.nav__button')
let formCallDeactivate = document.querySelector('.form-call__title')
let formCall = document.querySelector('.form-call')


formCallActivate.onclick = function () {
  if (formCall.classList.contains('form-call--hidden')) {
    formCall.classList.remove('form-call--hidden')
  } else {
    formCall.classList.add('form-call--hidden')
  }
}

formCallDeactivate.onclick = function () {
  formCall.classList.remove('form-call--hidden')
}