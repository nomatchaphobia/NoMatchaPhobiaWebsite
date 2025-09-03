document.querySelectorAll('.menu-item-has-children').forEach(function(item) {
    let timeout;
    const submenu = item.querySelector('.sub-menu');
    if (!submenu) return;

    item.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
        submenu.style.display = 'block';
    });

    item.addEventListener('mouseleave', function() {
        timeout = setTimeout(function() {
            submenu.style.display = '';
        }, 200); // 200ms delay
    });

    submenu.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
        submenu.style.display = 'block';
    });

    submenu.addEventListener('mouseleave', function() {
        timeout = setTimeout(function() {
            submenu.style.display = '';
        }, 200);
    });
});