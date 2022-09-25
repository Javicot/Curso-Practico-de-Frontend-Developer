const menuEmail = document.querySelector(".nbRight__email");
const dtMenu = document.querySelector(".desktopMenu");

menuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  dtMenu.classList.toggle("active");
}
