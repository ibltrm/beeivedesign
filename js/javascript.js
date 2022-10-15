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

            document.querySelector("[href*=" + id + "]").classList.add("active");
        }
    });
});