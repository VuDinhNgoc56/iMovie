// Lấy các element cần thiết
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Chuyển giao diện đăng ký/đăng nhập
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

// Đăng ký tài khoản
document.getElementById("register-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Lấy dữ liệu từ các input đăng ký theo id
  const username = document.getElementById('register-username').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value.trim();

  if (!username || !email || !password) {
    alert("Vui lòng nhập đầy đủ thông tin đăng ký!");
    return;
  }

  // Kiểm tra nếu username đã tồn tại
  if (localStorage.getItem(username)) {
    alert("Tên người dùng đã tồn tại. Vui lòng chọn tên khác!");
    return;
  }

  // Lưu thông tin đăng ký (ở đây chỉ lưu password để demo, bạn có thể mở rộng)
  localStorage.setItem(username, password);
  alert("Đăng ký thành công! Vui lòng đăng nhập.");

  // Chuyển sang giao diện đăng nhập
  container.classList.remove("right-panel-active");
  this.reset();
});

// Đăng nhập tài khoản
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Lấy dữ liệu từ các input đăng nhập theo id
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username || !password) {
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập!");
    return;
  }

  // Lấy password lưu trong localStorage
  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    alert("Đăng nhập thành công!");
    window.location.href = "trangchu.html";  // Chuyển đến trang chủ
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
});
