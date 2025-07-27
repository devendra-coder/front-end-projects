
const hamburger = document.querySelector('.mobile-nav');  // The hamburger icon (3 lines)
const navMenu = document.querySelector('.nav-menu');      // The navigation menu items

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');  // Animates hamburger to X shape
    navMenu.classList.toggle('active');    // Slides menu in from left
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');  // Return hamburger to normal state
        navMenu.classList.remove('active');    // Hide the navigation menu
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target element using the href attribute
        const target = document.querySelector(this.getAttribute('href'));
        
        // If the target element exists, scroll to it smoothly
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'  // Creates smooth scrolling animation
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    // Check if user has scrolled more than 50 pixels from top
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class when back at top
        header.classList.remove('scrolled');
    }
});


function animateScrollIndicator() {
    const indicator = document.querySelector('.scroll-down');
    
    if (indicator) {
        // Move the indicator down by 5 pixels
        indicator.style.transform = 'translateY(5px)';
        
        // After 600ms, move it back to original position
        // This creates a bouncing animation
        setTimeout(() => {
            indicator.style.transform = 'translateY(0)';
        }, 600);
    }
}

// Run the scroll indicator animation every 2 seconds
setInterval(animateScrollIndicator, 2000);