
        // Mobile menu functionality
        document.getElementById('mobile-menu').addEventListener('click', function() {
            document.getElementById('nav-menu').classList.toggle('active');
        });
        
        // Close dropdowns when clicking elsewhere
        document.addEventListener('click', function(event) {
            const navMenu = document.getElementById('nav-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (!navMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Handle dropdowns on mobile
        document.querySelectorAll('.menu-item-has-children > a').forEach(item => {
            item.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('mobile-open');
                }
            });
        });
    