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