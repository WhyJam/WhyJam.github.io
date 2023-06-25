const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuItems = menu.getElementsByTagName('a');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scroll
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

const sections = document.querySelectorAll('.section-reveal');

const revealSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');

  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 2000);
});
