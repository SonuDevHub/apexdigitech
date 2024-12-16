// Select all links in the offcanvas menu
const offcanvasLinks = document.querySelectorAll('#offcanvasNavbar .nav-link');

// Get the offcanvas element
const offcanvasElement = document.querySelector('#offcanvasNavbar');

// Add a click event to each link
offcanvasLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hide the offcanvas menu
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
    });
});
