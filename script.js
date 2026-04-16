// Custom Cursor Functionality
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // slight delay for follower to create a smooth trailing effect
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 60);
    });

    // Add hover effect on interactable elements
    const hoverElements = document.querySelectorAll('a, .info-block, .card, .profile-img');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hover-effect');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hover-effect');
        });
    });
}

// Scroll Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // Unobserve to trigger only once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
animatedElements.forEach(el => observer.observe(el));
