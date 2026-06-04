document.addEventListener('DOMContentLoaded', function () {

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });

        document.addEventListener('click', function (e) {
            if (!e.target.closest('.header-inner')) {
                nav.classList.remove('open');
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                nav.classList.remove('open');
            }
        });
    });

    // Form submission (redirect to FormSubmit)
    const pqrForm = document.querySelector('.pqr-form form');
    if (pqrForm && pqrForm.getAttribute('action')) {
        // Has backend action, let it submit naturally
    }

    // Dropdown toggle for mobile
    document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const menu = this.nextElementSibling;
            if (menu && menu.classList.contains('dropdown-menu')) {
                menu.classList.toggle('show');
                this.classList.toggle('open');
            }
        });
    });

    // Channel categories toggle
    document.querySelectorAll('.channel-category h3').forEach(function (header) {
        header.addEventListener('click', function () {
            const grid = this.nextElementSibling;
            if (grid && grid.classList.contains('channels-grid')) {
                grid.style.display = grid.style.display === 'none' ? 'grid' : 'none';
                this.classList.toggle('collapsed');
            }
        });
    });

});
