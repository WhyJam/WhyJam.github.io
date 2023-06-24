const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuItems = menu.getElementsByTagName('a');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scroll to the section with offset
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = menuItems[i].getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const targetPosition = targetSection.offsetTop - 300;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        menu.classList.remove('active');
    });
}
