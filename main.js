// Initialize Lucide Icons
lucide.createIcons();

// Smooth reveal on scroll for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .hero-visual').forEach(el => {
    // Initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Window Controls Interaction (Visual only)
document.querySelectorAll('.win-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === '×') {
            const win = e.target.closest('.window');
            if (win) {
                win.style.opacity = '0.5';
                setTimeout(() => win.style.opacity = '1', 500); // Just a flicker effect
            }
        }
    });
});
