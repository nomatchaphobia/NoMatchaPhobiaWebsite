function loadNavbar() {
    fetch('../partials/nav.html') 
        .then(response => response.text()) 
        .then(html => {
            document.getElementById('nav-container').innerHTML = html;
        })
        .catch(err => console.error('Failed to load navbar:', err));
}

document.addEventListener('DOMContentLoaded', loadNavbar);