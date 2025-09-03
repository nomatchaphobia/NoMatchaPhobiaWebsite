document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const menuItems = document.querySelectorAll('.menu-item-has-children > a');

    // Hamburger toggle (only on mobile)
    menuToggle.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            navMenu.classList.toggle('active');
        }
    });

    // Only one submenu open at a time (mobile)
    menuItems.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth > 768) return; // Only on mobile

            e.preventDefault();
            const parentLi = this.parentElement;

            // Close all other open submenus
            document.querySelectorAll('.nav-menu li.mobile-open').forEach(li => {
                if (li !== parentLi) li.classList.remove('mobile-open');
            });

            // Toggle current submenu
            parentLi.classList.toggle('mobile-open');
        });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        if (window.innerWidth > 768) return;
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            document.querySelectorAll('.nav-menu li.mobile-open').forEach(li => {
                li.classList.remove('mobile-open');
            });
        }
    });
});
