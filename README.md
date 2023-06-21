<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhyJam Law Firm</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-z0XNJfVo6JQXbpXdRMUGONWJChcwLtnXhV6yPLoJ0JdKLY2e+6Zw6MKskwLQn95aqlkxyJ0+gnqYPAP8xzA0hA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="script.js"></script>
</head>

<body>
    <header>
        <div class="container">
            <div class="menu-toggle" id="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <nav id="menu">
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#value-proposition">Why Choose Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="hero">
        <div class="container">
            <h1>Welcome to WhyJam Law Firm</h1>
            <p>Providing legal solutions tailored to your needs</p>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc eget mauris efficitur tempus.</p>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
        </div>
    </section>

    <section id="value-proposition">
        <div class="container">
            <h2>Why Choose Us?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc eget mauris efficitur tempus.</p>
        </div>
    </section>

    <section id="testimonials">
        <div class="container">
            <h2>Testimonials</h2>
            <div class="testimonial">
                <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc eget mauris efficitur
                    tempus."</blockquote>
                <cite>- John Doe</cite>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact and Inquiry</h2>
            <div class="contact-text">
                <p>We would love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <div class="contact-form">
                <form>
                    <input type="text" placeholder="Your Name">
                    <input type="email" placeholder="Your Email">
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 WhyJam? All rights reserved.</p>
            <br>
            <div class="social-icons">
                <a href="https://youtube.com/@WhY_JaM"><i class="fab fa-youtube"></i></a>
                <a href="https://twitter.com/WhyJam_KKSt?t=8Q-CvyWfuRxqwYEjH0VCBw&s=09"><i class="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100090499354036"><i class="fab fa-facebook"></i></a>
                <a href="https://www.tiktok.com/@WhY.JaM"><i class="fab fa-tiktok"></i></a>
                <a href="https://instagram.com/why_jam_?igshid=ZDdkNTZiNTM="><i class="fab fa-instagram"></i></a>
                <a href="https://www.reddit.com/u/WhY_JaM?utm_medium=android_app&utm_source=share"><i class="fab fa-reddit"></i></a>
            </div>
        </div>
    </footer>

    <script>
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    </script>
</body></html>
