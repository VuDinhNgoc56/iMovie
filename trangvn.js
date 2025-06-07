  document.addEventListener("DOMContentLoaded", function () {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const toggleLink = dropdown.querySelector('a');
            const menu = dropdown.querySelector('.dropdown-menu');

            toggleLink.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault(); // Ngăn chuyển trang
                    menu.classList.toggle('show'); // Toggle hiển thị menu
                }
            });
        });
    });

