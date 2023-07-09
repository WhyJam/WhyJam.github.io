const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuItems = menu.getElementsByTagName('a');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('open');
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
  }, 1500);
});

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the form input values
    const email = form.elements.email.value;
    const phoneNumber = form.elements.phonenumber.value;
    const message = form.elements.message.value;

    // Create the form data object
    const formData = new FormData();
    formData.append('email', email);
    formData.append('phonenumber', phoneNumber);
    formData.append('message', message);

    // Send the form data to Formspree using fetch
    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                Accept: 'application/json'
            },
            body: formData
        });

        // Check if the form submission was successful
        if (response.ok) {
            // Reset the form fields
            form.reset();
            alert('Nachricht wurde erfolgreich gesendet!');
        } else {
            // Handle form submission error
            throw new Error('Form submission failed.');
        }
    } catch (error) {
        // Handle fetch error
        console.error(error);
        alert('Form submission failed. Please try again later.');
    }
});

const lawyersCarousel = document.querySelector('.lawyers-carousel');
const lawyerItems = lawyersCarousel.getElementsByClassName('lawyer');
let currentLawyerIndex = 0;
let carouselTimer;

const showNextLawyer = () => {
    lawyerItems[currentLawyerIndex].classList.remove('show');
    lawyerItems[currentLawyerIndex].style.opacity = '0';
    lawyerItems[currentLawyerIndex].style.transform = 'scale(0.9)';

    currentLawyerIndex = (currentLawyerIndex + 1) % lawyerItems.length;

    lawyerItems[currentLawyerIndex].classList.add('show');
    lawyerItems[currentLawyerIndex].style.opacity = '1';
    lawyerItems[currentLawyerIndex].style.transform = 'scale(1)';
};

// Add transition style to the initial lawyer item
lawyerItems[currentLawyerIndex].classList.add('show');
lawyerItems[currentLawyerIndex].style.opacity = '1';
lawyerItems[currentLawyerIndex].style.transform = 'scale(1)';

// Start the carousel timer
carouselTimer = setInterval(showNextLawyer, 2500);

// Pause the carousel timer on mouse enter
lawyersCarousel.addEventListener('mouseenter', () => {
    clearInterval(carouselTimer);
});

// Resume the carousel timer on mouse leave
lawyersCarousel.addEventListener('mouseleave', () => {
    carouselTimer = setInterval(showNextLawyer, 2500);
});

// Increase size on mouse enter and pause the carousel timer
for (let i = 0; i < lawyerItems.length; i++) {
    lawyerItems[i].addEventListener('mouseenter', () => {
        lawyerItems[i].style.transform = 'scale(1.1)';
        clearInterval(carouselTimer);
    });
    lawyerItems[i].addEventListener('mouseleave', () => {
        lawyerItems[i].style.transform = 'scale(1)';
        carouselTimer = setInterval(showNextLawyer, 2500);
    });
}
