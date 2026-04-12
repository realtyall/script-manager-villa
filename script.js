document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Accordion Logic for Contents & FAQ
    const accordionHeaders = document.querySelectorAll('.chapter-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close other active items if desired (optional)
            // document.querySelectorAll('.chapter-item').forEach(other => other.classList.remove('active'));

            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add some micro-interactions for the CTA button
    const ctaBtn = document.querySelector('.btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('mouseenter', () => {
            // Optional: add a glow effect or sound
        });
    }
});
