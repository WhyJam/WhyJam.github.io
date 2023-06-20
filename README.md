
<html>
<head>
  <title>Law Firm Website</title>
  <style>
    
    body {
      background-color: #f5f5f5; /* Replace with your desired background color */
    }  
    
    /* Reset some default styles */
    body, h1, h2, h3, h4, h5, h6, p, ul, li {
      margin: 0;
      padding: 0;
    }

    /* Global styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2; /* Replace with your desired background color */
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
      width: 100%;
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
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
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
      padding: 10px;
    }

    nav ul li a:hover {
      background-color: #555;
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
      padding: 20px;
      text-align: center;
      color: #fff;
      width: 100%;
    }

    /* Some other stuff */
    h1 {
      color: #fff;
    }
    section {
      margin-bottom: 50px; /* Add margin at the bottom of each section */
    }
  </style>
  
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
  
</head>






<body>
  <header class="header">
    <div class="container">
      <h1>WhyJam?</h1>
      <p>Slogan</p>
    </div>
  </header>

  <nav>
    <div class="container">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#lawyers">Our Lawyers</a></li> <!-- Added "Our Lawyers" section to the navigation -->
        <li><a href="#contact">Contact</a></li>
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

    <section id="lawyers">
      <h2>Our Lawyers</h2>
      <div class="lawyers-container">
        <div class="lawyer">
          <img src="lawyer1.jpg" alt="Lawyer 1">
          <h3>Lawyer 1</h3>
          <p>Description of Lawyer 1</p>
        </div>
        <div class="lawyer">
          <img src="lawyer2.jpg" alt="Lawyer 2">
          <h3>Lawyer 2</h3>
          <p>Description of Lawyer 2</p>
        </div>
        <div class="lawyer">
          <img src="lawyer3.jpg" alt="Lawyer 3">
          <h3>Lawyer 3</h3>
          <p>Description of Lawyer 3</p>
        </div>
        <div class="lawyer">
          <img src="lawyer4.jpg" alt="Lawyer 4">
          <h3>Lawyer 4</h3>
          <p>Description of Lawyer 4</p>
        </div>
        <div class="lawyer">
          <img src="lawyer5.jpg" alt="Lawyer 5">
          <h3>Lawyer 5</h3>
          <p>Description of Lawyer 5</p>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium condimentum risus vitae aliquam. Suspendisse vulputate tincidunt sem, ut aliquam tortor interdum a. Sed et magna velit.</p>
    </section>
  </div>

  <footer>
    <div class="container">
      <p>&copy; 2023 WhyJam? All rights reserved.</p>
    </div>
  </footer>
</body>


</html>
