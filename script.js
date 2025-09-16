document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you, " + document.getElementById("name").value + "! Your message has been sent.");
      this.reset();
    });
     // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
          .scrollIntoView({ behavior: 'smooth' });
      });
    });