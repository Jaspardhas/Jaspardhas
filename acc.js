document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for nav links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Function to initialize the image slider (if needed)
    function initImageSlider() {
        const sliders = document.querySelectorAll('.image-container');
        
        sliders.forEach(slider => {
            const mainImg = slider.querySelector('.main-img');
            const hoverImg = slider.querySelector('.hover-img');
            
            slider.addEventListener('mouseenter', () => {
                mainImg.style.opacity = 0;
                hoverImg.style.opacity = 1;
            });
            
            slider.addEventListener('mouseleave', () => {
                mainImg.style.opacity = 1;
                hoverImg.style.opacity = 0;
            });
        });
    }

    initImageSlider();

    // Function to handle any form submissions or other dynamic interactions (if needed)
    function handleFormSubmissions() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                // Add your form submission logic here
                alert('Form submitted!');
            });
        });
    }

    handleFormSubmissions();
});
