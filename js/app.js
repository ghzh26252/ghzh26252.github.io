document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 500);
        });
    }

    // Scroll Animations (Reveal on Scroll)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Mobile Menu Toggle
    const btnData = document.querySelector('[data-toggle="navbar"]');
    const mobileMenu = document.getElementById('navbar-mobile');
    
    if (btnData && mobileMenu) {
        btnData.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Simple animation or class toggle
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('flex');
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        });
    }

    // Optional: Stats Counter Animation if needed in future
    // ...
});
