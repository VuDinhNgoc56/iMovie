const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Tạm lưu tài khoản đã đăng ký trong phiên (biến toàn cục)
let tempUser = null;

// Giao diện chuyển đổi
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
}
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}

// Xử lý đăng ký
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (!username || !email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin đăng ký!");
        return;
    }

    // Lưu tạm tài khoản đã đăng ký vào biến trong phiên
    tempUser = {
        username: username,
        email: email,
        password: password
    };

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    this.reset();
    container.classList.remove("right-panel-active");
});

// Xử lý đăng nhập
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin đăng nhập!");
        return;
    }

    if (tempUser && tempUser.username === username && tempUser.password === password) {
        alert("Đăng nhập thành công!");
        window.location.href = "trangchu.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng hoặc chưa đăng ký!");
    }
});
