function navBar() {
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navbar");
    bar.onclick = () => {
        if (nav.style.right == "0%") {
            nav.style.right = "-50%";
            bar.src = "images/menu-bar.png";
        } else {
            nav.style.right = "0%";
            bar.src = "images/close.png";
        }
        nav.classList.toggle("new")
    }
}
navBar();


const newNav = () => {
    let navigation = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            navigation.classList.add('active');
        } else {
            navigation.classList.remove('active');
        }
    });

}

newNav();

function navigation() {

    var dropDown = document.querySelector('.is-dropdown'),
        mDropDown = document.querySelector('.menu-dropdown');
    dropDown.addEventListener('click', function() {
        mDropDown.classList.toggle('show');
        dropDown.classList.toggle('open');
    })
}
navigation();


function toTop() {
    let top = document.querySelector(".top");
    window.onscroll = () => {
        if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
            top.style.display = "block"
        } else {
            top.style.display = "none"
        }
    }

    top.onclick = () => {
        scrollTo(0, 0)
    }

}
toTop();

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});