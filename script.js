const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('#menu a');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        menu.classList.remove('active');
    });
});

document.body.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('active');
    header.classList.toggle('visible');
});


document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector(".menu-toggle");
    var menu = document.querySelector("#menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});
