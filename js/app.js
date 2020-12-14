window.onscroll = function() {
    let header = document.getElementById("header");
    let about = document.getElementById("about");
    let sticky = about.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
};


let burger = document.getElementById("burger");

burger.addEventListener("click", function() {
    let element = document.getElementById("nav");
    
    element.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

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

document.querySelectorAll('[data-scroll]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('data-scroll').substring(1);

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