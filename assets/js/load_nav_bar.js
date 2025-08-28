// Function to load the navbar
function loadNavbar() {
    fetch('../partials/nav.html') // Go get the HTML file
        .then(response => response.text()) // Read its text content
        .then(html => {
            // Find the placeholder div and insert the navbar HTML
            document.getElementById('nav-container').innerHTML = html;
        })
        .catch(error => console.error('Failed to load navbar:', error));
}

// Run the function when the page is done loading
document.addEventListener('DOMContentLoaded', loadNavbar);