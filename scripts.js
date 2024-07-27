document.addEventListener('DOMContentLoaded', function() {
  // Toggle product images and text section
  document.querySelector('.products-button').addEventListener('click', function() {
      const imagesSection = document.getElementById('images');
      const textSection = document.querySelector('.text-section');
      
      // Toggle visibility of the images section
      if (imagesSection.classList.contains('hidden')) {
          imagesSection.classList.remove('hidden');
          textSection.classList.add('hidden'); // Hide text section when images are shown
      } else {
          imagesSection.classList.add('hidden');
          textSection.classList.remove('hidden'); // Show text section when images are hidden
      }
  });

  // Add visibility class to images section on scroll
  const imagesSection = document.getElementById('images');
  
  window.addEventListener('scroll', function() {
      const rect = imagesSection.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      
      if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
          imagesSection.classList.add('visible');
      }
  });
  
  // Handle Products dropdown animation
  const productsButton = document.querySelector('.products-button');
  const productsInfo = document.querySelector('.products-info');
  
  if (productsButton && productsInfo) {
      productsButton.addEventListener('mouseenter', function() {
          productsInfo.style.display = 'block';
      });
      
      productsButton.addEventListener('mouseleave', function() {
          productsInfo.style.display = 'none';
      });
  }

  // Toggle text section
  document.querySelector('.hover-trigger').addEventListener('mouseover', function() {
      document.querySelector('.hover-info').style.display = 'block';
  });

  document.querySelector('.hover-trigger').addEventListener('mouseout', function() {
      document.querySelector('.hover-info').style.display = 'none';
  });

  // Image Slider functionality
  let slideIndex = 0;

  function showSlides() {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide, index) => {
          slide.style.display = (index === slideIndex) ? 'block' : 'none';
      });
  }

  function nextSlide() {
      const slides = document.querySelectorAll('.slide');
      slideIndex = (slideIndex + 1) % slides.length;
      showSlides();
  }

  function prevSlide() {
      const slides = document.querySelectorAll('.slide');
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlides();
  }

  document.querySelector('.next-slide').addEventListener('click', nextSlide);
  document.querySelector('.prev-slide').addEventListener('click', prevSlide);

  showSlides(); // Initialize slider with the first slide

  // Initialize Leaflet map
  function initMap() {
      const centerLocation = [8.158501821518575, 77.44514205767081]; // Coordinates for the initial view
      const zoomedInLevel = 18; // Zoom level when clicked
      const shopName = "Jas Pardhas"; // Replace with your shop name

      const map = L.map('map').setView(centerLocation, 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const marker = L.marker(centerLocation).addTo(map);

      map.on('click', function () {
          map.setView(centerLocation, zoomedInLevel);

          // Add or update the popup on the marker
          marker.bindPopup(shopName).openPopup();
      });
  }

  initMap();

  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTopButton.classList.remove('hidden');
      } else {
          backToTopButton.classList.add('hidden');
      }
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
