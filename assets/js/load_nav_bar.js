function loadNavbar() {
    fetch('../partials/nav.html') 
        .then(response => response.text()) 
        .then(html => {
            document.getElementById('nav-container').innerHTML = html;

            // Dynamically load nav scripts after nav is present
            ['../assets/js/mobile_nav.js', '../assets/js/navDelay.js'].forEach(src => {
              const script = document.createElement('script');
              script.src = src;
              document.body.appendChild(script);
            });
        })
        .catch(err => console.error('Failed to load navbar:', err));
}

document.addEventListener('DOMContentLoaded', loadNavbar);