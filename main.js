/* Mobile Navbar Section */
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

/* PX offset for when the navbar activates */
const offset = 50;

menuBtn.addEventListener('click', () => {
   menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
   /* if the page is scrolld by 50px */
   if (pageYOffset > offset) {
      /* Activate navbar */
      navbar.classList.add('navbar-active');
   } else {
      navbar.classList.remove('navbar-active');
   }
});

/* Pagination Section */

const title = document.querySelector('.title');
const cap = document.querySelectorAll('.captions > div');
const pag = document.querySelectorAll('.pag');
const slideNum = document.querySelector('.slide-count');
const header = document.querySelector('header');

let id = 0;

/* Array with image paths for slider */

const images = [
   '/imgs/canyon-rocks.jpg',
   '/imgs/dock-mountain-lake.jpg',
   '/imgs/lady-in-water.jpg'
];

function slider(i) {
   /* Sets BG image dynamically */
   header.style.background = `url(${images[i]}) no-repeat center`;

   /* Toggles active class & removes class from all */
   for (let i = 0; i < pag.length; i++) {
      /* Removes active from pagination */
      pag[i].classList.remove('pag-active');
      /* Removes active from captions */
      cap[i].classList.remove('cap-active');
   };
   /* Resets active class to clicked pagination */
   pag[i].classList.add('pag-active');
   /* Resets active class to caption */
   cap[i].classList.add('cap-active');
   /* Changes title */
   title.innerText = cap[i].lastElementChild.innerText;
   /* Title animation */
   title.classList.add('animate__fadeInUp');
   setTimeout(() => {
      title.classList.remove('animate__fadeInUp');
   }, 300);
   /* Changes slide number */
   slideNum.innerHTML = `0${i + 1}/<sup>0${pag.length}</sup>`;
}

/* Pagination Controls */
for (let i = 0; i < pag.length; i++) {
   /* Click event for pag */
   pag[i].addEventListener('click', () => {
      slider(i);
      /* Set id to clicked pag index */
      id = 1;
      /* Stops auto slide */
      stopAutoSlide()
   });
}

function nextSlide() {
   /* Increments img id */
   id++;
   /* Checks if id is greater than available number of slides */
   if (id > pag.length - 1) {
      id = 0;
   }
   slider(id);
}

/* Automates sldier */
let autoSlide = setInterval(nextSlide, 10000);
/* Stops automatic slide */
function stopAutoSlide() {
   clearInterval(autoSlide);
   /* Restarts autoSlide */
   autoSlide = setInterval(nextSlide, 10000);
}