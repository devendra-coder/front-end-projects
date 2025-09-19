 const hamburger = document.querySelector('.mobile-nav');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Simple scroll indicator animation
        function animateScrollIndicator() {
            const indicator = document.querySelector('.scroll-down');
            if (indicator) {
                indicator.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    indicator.style.transform = 'translateY(0)';
                }, 600);
            }
        }

        // Run animation every 2 seconds
        setInterval(animateScrollIndicator, 2000);

        //const hamburger = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked!');
});