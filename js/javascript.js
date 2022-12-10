
let LANGUAGE = "en";

//header smaller screen
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When nav__link in clicked, remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// active navbar link

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function(event) {
    sections.forEach((section) => {
        let top = window.scrollY + 250;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            document.querySelectorAll(".active").forEach((a) => {
                a.classList.remove("active");
            });

            // document.querySelector("[href*=" + id + "]").classList.add("active");
            // const navLinks = document.querySelectorAll('.nav-links');
            // navLinks.forEach( navLink => {
            //    const nav = navLink.querySelector(`.${LANGUAGE} .nav-link` );
            //    console.log(nav);
            // });

            const navEls = document.querySelectorAll(`.nav-links .nav-link[href*=${id}]`);
            navEls.forEach( navEl => {
               navEl.classList.add('active');
            });
        }
    });
});

//const btn = document.querySelector(".button");

//btn.classList.add("button--loading");
//btn.classList.remove("button--loading");

import { message } from "./etc/index.js";
message.send.default();


const engBtn = document.getElementById('english');
const ptBtn = document.getElementById('portuguese');
const englishShow = document.querySelectorAll('.en');
const portugueseShow = document.querySelectorAll('.pt');

// for (let i = 0; i < engBtn.length; i++) {
//     englishShow[i].addEventListener("click", () => {
//         console.log()
//         portugueseShow.style.display = 'none';
//         console.log()
//     })
// }
// for (let i = 0; i < ptBtn.length; i++) {
//     portugueseShow[i].addEventListener("click", () => {
//         console.log()
//         englishShow.style.display = 'none';
//         console.log()
//     })
// }

engBtn.addEventListener('click', event => {
   englishShow.forEach( el => {
      el.style.display = 'block';
   });
   portugueseShow.forEach( el => {
      el.style.display = 'none';
   });

   LANGUAGE = "en";
});

ptBtn.addEventListener('click', event => {
   englishShow.forEach( el => {
      el.style.display = 'none';
   });
   portugueseShow.forEach( el => {
      el.style.display = 'block';
   });

   LANGUAGE = "pt";
});