let buttonAccordeons = document.querySelectorAll('.button__footer-accordeon');
let listAccordeons = document.querySelectorAll('.page-footer__list');
let index;

for (let buttonAccordeon of buttonAccordeons) {
  buttonAccordeon.onclick = function () {
    index = 0;
    for (let i of buttonAccordeons) {
      if (i != buttonAccordeon)
        index++;
      else
        break;
    }
    if (listAccordeons[index].classList.contains('page-footer__list-hidden')) {
      listAccordeons[index].classList.remove('page-footer__list-hidden');
    } else {
      listAccordeons[index].classList.add('page-footer__list-hidden');
    }
  }
}
