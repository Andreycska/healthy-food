window.onscroll = function() {
    let headerNav = document.getElementById("nav");
    let links = headerNav.getElementsByClassName("nav__link");
    let header = document.getElementById("header");
    let about = document.getElementById("about");
    let sticky = about.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }
      }
};


let burger = document.getElementById("burger");

burger.addEventListener("click", function() {
    let element = document.getElementById("nav");
    
    element.classList.toggle("open");
});

document.querySelectorAll('[data-menu]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('data-menu').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.nav').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        let element = document.getElementById("nav");
        element.classList.toggle("open");

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

let headerNav = document.getElementById("nav");
let links = headerNav.getElementsByClassName("nav__link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.querySelectorAll('[data-scroll]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('data-scroll').substring(1);
        let headerNav = document.getElementById("nav");
        let linkNav = headerNav.getElementsByClassName("nav__link");

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.nav').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

new Swiper('.about', {

    // Кнопки навигации

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Прокрутка мышью

    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".about",
    },

    // Сколько слайдов показывать

    slidesPerView: 1,

    // Растояние между слайдами

    spaceBetween: 30,

    // Бесконечная прокрутка

    // loop: true,

    // Адаптивность

    breakpoints: {
        // 320 : {
        //     slidesPerView: 1,
        // },
        577 : {
            slidesPerView: 2,
        }
    },

});