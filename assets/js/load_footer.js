function loadFooter() {
    fetch('../includes/footer.php')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(err => console.error('Failed to load footer', err));
}

document.addEventListener('DOMContentLoaded', loadFooter);