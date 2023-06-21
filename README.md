* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
}

.container {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: top 0.5s;
}

header.hidden {
  top: -100px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

section {
  margin-top: 80px;
}

section h2 {
  margin-bottom: 10px;
}

#hero {
  background-color: #f2f2f2;
  text-align: center;
  padding: 60px 0;
}

#hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

#hero p {
  font-size: 20px;
  color: #666;
}

#services ul {
  list-style: none;
}

#services ul li {
  margin-bottom: 10px;
}

#value-proposition {
  text-align: center;
  padding: 60px 0;
}

#value-proposition h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

#value-proposition p {
  font-size: 18px;
  color: #666;
}

#testimonials .testimonial {
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
}

#testimonials blockquote {
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
}

#testimonials cite {
  font-size: 14px;
  color: #888;
}

#contact {
  margin-bottom: 40px;
}

.contact-text {
  margin-bottom: 20px;
}

#contact .contact-form input,
#contact .contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

#contact .contact-form button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

#contact .contact-form button:hover {
  background-color: #555;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

/* Media Queries for Responsive Design */

@media screen and (max-width: 767px) {
  header {
    padding: 5px;
  }

  header h1 {
    font-size: 24px;
  }

  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  nav ul li {
    margin: 10px;
  }

  section {
    margin-top: 60px;
  }

  #hero {
    padding: 40px 0;
  }

  #hero h1 {
    font-size: 30px;
  }

  #hero p {
    font-size: 18px;
  }

  #value-proposition h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  #value-proposition p {
    font-size: 16px;
  }

  #testimonials blockquote {
    font-size: 16px;
  }

  #testimonials cite {
    font-size: 12px;
  }

  #contact .contact-form input,
  #contact .contact-form textarea {
    font-size: 14px;
  }
}
