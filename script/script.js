// Initialize WOW.js for reveal animations
new WOW({
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       100,
    mobile:       true,
    live:         true,
}).init();


// Dynamically update the copyright year
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

/* ========================================= */
/* ===   MOBILE NAVIGATION TOGGLE SCRIPT === */
/* ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');
    const body = document.body;

    if (menuButton && mobileMenu && openIcon && closeIcon) {
        menuButton.addEventListener('click', () => {
            // Toggle the menu's visibility class
            mobileMenu.classList.toggle('menu-open');

            // Toggle the open/close icons
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');

            // Prevent scrolling of the background content when the menu is open
            if (mobileMenu.classList.contains('menu-open')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }
});