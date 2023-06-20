<!DOCTYPE html>
<html>
<head>
  <title>Law Firm Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    body {
      font-family: 'Roboto', Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
    }
    
    /* Reset some default styles */
    h1, h2, h3, h4, h5, h6, p, ul, li {
      margin: 0;
      padding: 0;
    }

    /* Global styles */
    .container {
      max-width: 960px;
      width: auto;
      margin: 0 auto;
      padding: 40px;
    }

    h1, h2, h3 {
      color: #333;
    }

    p {
      color: #5A5A5A;
      line-height: 1.5;
    }

    /* Header styles */
    .header {
      background-color: #333;
      color: #fff; /* Updated color */
      padding: 40px;
      text-align: center;
      margin-top: 80px; 
    }

    .header h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .header p {
      font-size: 16px;
    }

    /* Navigation styles */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #777;
      transition: transform 0.3s ease-in-out;
      z-index: 1;
    }

    nav ul {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    nav ul li {
      display: inline; /* Added this line */
    }

    nav ul li a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      padding: 20px;
    }

    nav ul li a:hover {
      background-color: #555;
    }

    /* Media query for small screens */
    @media only screen and (max-width: 600px) {
      nav ul {
        display: block;
        text-align: center;
      }

      nav ul li {
        display: block;
        margin-bottom: 10px;
      }
    }

    /* Main content styles */
    .main-content {
      padding-top: 80px;
    }

    .main-content h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    /* Footer styles */
    footer {
      background-color: #333;
      padding: 20px;
      text-align: center;
      color: #fff;
      box-sizing: border-box;
    }

    footer p {
      color: #fff; 
      margin: 0;
    }

    /* Social media icons */
    .social-icons {
      font-size: 24px;
    }

    .social-icons a {
      color: #fff;
      margin-right: 10px;
      text-decoration: none;
    }

    /* Some other stuff */
    section {
      margin-bottom: 50px; 
    }
    
    h1 {
      color: white;
    }
    
    p1 {
      color: white;
    }
  </style>

  <script>
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.transform = "translateY(0)"; 
      } else {
        document.querySelector("nav").style.transform = "translateY(-100%)"; 
      }
      prevScrollpos = currentScrollPos;
    }
  </script>
</head>

<body>
  <nav>
    <div class="container">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#lawyers">Our Lawyers</a></li>
      </ul>
    </div>
  </nav>

  <header class="header">
    <div class="container">
      <h1>WhyJam?</h1>
      <p1>Slogan</p1>
    </div>
  </header>
  
  <div class="container main-content">
    <section id="home">
      <h2>Welcome to Your Law Firm</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium condimentum risus vitae aliquam. Suspendisse vulputate tincidunt sem, ut aliquam tortor interdum a. Sed et magna velit.</p>
    </section>

    <section id="about">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium condimentum risus vitae aliquam. Suspendisse vulputate tincidunt sem, ut aliquam tortor interdum a. Sed et magna velit.</p>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium condimentum risus vitae aliquam. Suspendisse vulputate tincidunt sem, ut aliquam tortor interdum a. Sed et magna velit.</p>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium condimentum risus vitae aliquam. Suspendisse vulputate tincidunt sem, ut aliquam tortor interdum a. Sed et magna velit.</p>
    </section>

    <section id="lawyers"> 
      <h2>Our Lawyers</h2>
      <div class="lawyers-container">
        <div class="lawyer">
          <img src="placeholder1.jpg" alt="Lawyer 1">
          <p>Description of Lawyer 1</p>
        </div>
        <div class="lawyer">
          <img src="placeholder2.jpg" alt="Lawyer 2">
          <p>Description of Lawyer 2</p>
        </div>
        <div class="lawyer">
          <img src="placeholder3.jpg" alt="Lawyer 3">
          <p>Description of Lawyer 3</p>
        </div>
        <div class="lawyer">
          <img src="placeholder4.jpg" alt="Lawyer 4">
          <p>Description of Lawyer 4</p>
        </div>
        <div class="lawyer">
          <img src="placeholder5.jpg" alt="Lawyer 5">
          <p>Description of Lawyer 5</p>
        </div>
      </div>
    </section>
  </div>

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
</body>
</html>
