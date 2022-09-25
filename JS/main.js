const menuEmail = document.querySelector(".nbRight__email");
const dtMenu = document.querySelector(".desktopMenu");

menuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  dtMenu.classList.toggle("active");
}

const hamBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobileMenu");

hamBtn.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}
