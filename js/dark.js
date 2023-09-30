let bttndarklg = document.querySelector('#darkmodelg');
let bttndarksm = document.querySelector('#darkmodesm');
let body1 = document.querySelector("#body");
let nav = document.querySelector('#navtop');
let foot = document.querySelector('#footer');
let phonebttn = document.querySelectorAll('#phonebttn');
let sections = document.querySelectorAll('.darkmood');
let sections2 = document.querySelector('.darkmood1');
let cards = document.querySelectorAll('.darkback');
let cards2 = document.querySelector('.darkback2');
bttndarklg.addEventListener("click", darkMood_on_off);
bttndarksm.addEventListener("click", darkMood_on_off);
let contact = document.querySelector('#contactUs')

function darkMood_on_off() {
    body1.classList.toggle("bg-dark");
    body1.classList.toggle("text-light");
    nav.classList.toggle("navbar-light");
    nav.classList.toggle("navbar-dark");
    nav.classList.toggle("bg-dark");
    phonebttn.forEach((e) => e.classList.toggle('text-primary'));
    phonebttn.forEach((e) => e.classList.toggle('text-danger'));
    sections.forEach((e) => e.classList.toggle('text-light'))
    cards.forEach((e) => e.classList.toggle('bg-body'))
    sections2.classList.toggle("text-dark");
    sections2.classList.toggle("text-light");
    cards2.classList.toggle("bg-dark");
    cards2.classList.toggle("text-light");
    foot.classList.toggle("bg-light");
    foot.classList.toggle("bg-dark");
    contact.classList.toggle("bg-light");
    contact.classList.toggle("bg-dark");
    contact.classList.toggle("text-light");
    contact.classList.toggle("text-dark");
    contact.classList.toggle("shadow p-3 mb-5 bg-white rounded")
};