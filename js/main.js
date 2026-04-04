// navbar
const text = "MyPortfolio";
const typingElement = document.querySelector(".typing-text");
let index = 0;

function typeEffect() {
  typingElement.textContent = text.slice(0, index++);

  if (index <= text.length) {
    setTimeout(typeEffect, 200); // kecepatan ketik (200ms per huruf)
  } else {
    setTimeout(() => {
      typingElement.textContent = ""; // reset teks
      index = 0;
      typeEffect(); // ulang dari awal
    }, 1500); // jeda sebelum ulang ketik (1.5 detik)
  }
}

typeEffect();

// main.js
document.addEventListener("DOMContentLoaded", function () {
  const text = "Abdul Aziz";
  const typingElement = document.querySelector(".typing-name");
  let index = 0;
  let isDeleting = false;
  let speed = 150; // kecepatan ketik default

  function typeEffect() {
    if (!isDeleting) {
      // Ngetik huruf per huruf
      typingElement.textContent = text.substring(0, index + 1);
      index++;

      if (index === text.length) {
        // Kalau udah selesai ngetik semua → tunggu 1 detik terus hapus
        isDeleting = true;
        speed = 1000; 
      } else {
        speed = 150;
      }
    } else {
      // Menghapus huruf per huruf
      typingElement.textContent = text.substring(0, index - 1);
      index--;

      if (index === 0) {
        // Kalau udah kehapus semua → tunggu 0.5 detik terus ketik lagi
        isDeleting = false;
        speed = 500; 
      } else {
        speed = 100;
      }
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  // Highlight active menu on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Kurangi sedikit offset agar responsif saat scroll
      if (pageYOffset >= sectionTop - 250) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

});

