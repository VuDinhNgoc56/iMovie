
function showTrailer() {
  // Hiển thị trailer 1, ẩn trailer 2
  document.getElementById("trailer-video").style.display = "block";
  document.getElementById("trailer-video1").style.display = "none";

  // Ẩn các thành phần cần thiết
  hideUIElements();
}

function showTrailer1() {
  // Hiển thị trailer 2, ẩn trailer 1
  document.getElementById("trailer-video1").style.display = "block";
  document.getElementById("trailer-video").style.display = "none";

  // Ẩn các thành phần cần thiết
  hideUIElements();
}
function showTrailer2() {
  // Hiển thị trailer 2, ẩn trailer 1
  document.getElementById("trailer-video2").style.display = "block";
  document.getElementById("trailer-video").style.display = "none";

  // Ẩn các thành phần cần thiết
  hideUIElements();
}

function hideUIElements() {
  // Ẩn tất cả button, h1 và h2
  document.querySelectorAll("button, h1, h2").forEach(el => {
    el.style.display = "none";
  });

  // Ẩn ảnh poster chính và thumbnail
  const poster = document.getElementById("poster");
  if (poster) {
    poster.style.display = "none";
  }
}

