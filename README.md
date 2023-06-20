<!DOCTYPE html>
<html>
<head>
  <title>Law Firm Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
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

    nav ul li a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      padding: 20px;
    }

    nav ul li a:hover {
      background-color: #555;
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

    /* Some other stuff */
    section {
      margin-bottom: 50px; 
    }
      h1{
          color: white;
      }
      p1{
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
        <li><a href="#lawyers">Our Lawyers</a></li> 
      </ul>
    </div>
  </nav>

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
    </div>
  </footer>
</body>
</html>
