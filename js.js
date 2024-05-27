document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section *,.merah');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if ((rect.top < window.innerHeight && rect.bottom > 0) || (rect.bottom > 0 && rect.top < window.innerHeight)){
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Inisialisasi pada load pertama kali
    checkVisibility();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Override default smooth scroll behavior to set the duration
        targetElement.scrollIntoView({
            behavior: 'auto',
            block: 'start'
        });

        setTimeout(() => {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 1);
    });
});

