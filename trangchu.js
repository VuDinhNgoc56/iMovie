
    function changeBg(bg, title) {
        const banner = document.querySelector('.banner');
        const contents = document.querySelectorAll('.content');

        if (banner) {
            banner.style.backgroundImage = `url('poster/${bg}')`;
            banner.style.backgroundSize = 'cover';
            banner.style.backgroundPosition = 'center';
        }

        contents.forEach(function (content) {
            content.classList.remove('active');
            if (content.classList.contains(title)) {
                content.classList.add('active');
            }
        });
    }
function toggleVideo() {
        const trailer = document.querySelector('.trailer');
        const video = trailer.querySelector('video');
        trailer.classList.toggle('active');

        if (trailer.classList.contains('active')) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }

    $(document).ready(function () {
        $('.carousel').carousel();
    });
function adaptLayout() {
    const banner = document.querySelector('.banner');
    if (!banner) return;

    const width = window.innerWidth;

    if (width < 600) {
        banner.style.height = '50vh';
    } else if (width < 1024) {
        banner.style.height = '70vh';
    } else {
        banner.style.height = '100vh';
    }
}

// Gọi hàm khi tải trang và khi resize màn hình
window.addEventListener('load', adaptLayout);
window.addEventListener('resize', adaptLayout);

// Load phần header từ file Movie.html
if (document.getElementById('header-placeholder')) {
    fetch('Movie.html')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(function(error) {
            console.error('Lỗi khi tải header:', error);
        });
}
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});
