<!DOCTYPE html>
<html>
<head>
  <title>Law Firm Website</title>
  <style>
    /* Reset some default styles */
    body, h1, h2, h3, h4, h5, h6, p, ul, li {
      margin: 0;
      padding: 0;
    }

    /* Global styles */
    body {
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px;
    }

    h1, h2, h3 {
      color: #333;
    }

    p {
      color: #5A5A5A;
    }

    /* Header styles */
    .header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
        margin-top: 120px;
    }

    .header h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .header p {
      font-size: 16px;
    }
      
    section:not(:last-of-type) {
    margin-bottom: 40px; /* Add margin at the bottom of each section except the last one */
    }
      
    /* Navigation styles */
    nav {
      background-color: #555;
      padding: 10px 0;
      position: fixed;
      top: 0;
      width: 100%;
      transition: transform 0.3s ease-in-out;
        z-index: 1;
    }
      
      
    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    nav ul li {
      display: inline-block;
      margin-right: 20px;
    }

    nav ul li a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      padding: 5px 10px;
    }

    nav ul li a:hover {
      background-color: #777;
    }
    
    nav ul {
    display: flex; 
    justify-content: space-between; 
    padding: 0 20px; 
    margin: 0 40px; 
      }
    nav ul li a {
    font-size: 22px; 
      }

    /* Main content styles */
    .main-content {
      margin-top: 80px;
    }

    .main-content h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .main-content p {
      line-height: 1.5;
      margin-bottom: 20px;
    }

    /* Footer styles */
    footer {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    footer p {
      font-size: 14px;
    }
    
    h1 {
        color: white;  
    }
    p1 {
          color: white;
    }
    body {
    background-color: #f2f2f2; /* Replace with your desired background color */
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="container">
      <h1>WhyJam?</h1>
      <p1>Slogan</p1>
    </div>
  </header>

  <nav>
    <div class="container">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <div class="container main-content">
    <section id="home">
      <h2>Welcome to Your Law Firm</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium condimentum risus vitae aliquam. Suspendisse vulputate trem ipsum dolor sit tae aliquam. Suspendisse vulputate trem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium condimentum risus vitae aliquam. Suspendisse vulputate trem ipsum dolor sit aipsum dolor sit amet, codimentum risuiquam. Suspendisse vulputate trem ipsa</p>
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
  </div>

  <footer>
    <div class="container">
      <p1>&copy; 2023 WhyJam? All rights reserved.</p1>
    </div>
  </footer>

  <script>
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.transform = "translateY(0)"; // Show the navigation bar when scrolling up
      } else {
        document.querySelector("nav").style.transform = "translateY(-100%)"; // Hide the navigation bar when scrolling down
      }
      prevScrollpos = currentScrollPos;
    }
  </script>
</body>
</html>
