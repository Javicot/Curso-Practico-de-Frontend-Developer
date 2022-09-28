//*Componente 01 y 02
const menuEmail = document.querySelector(".nbRight__email");
const dtMenu = document.querySelector(".desktopMenu");

// menuEmail.addEventListener("click", toggleDesktopMenu);
// function toggleDesktopMenu() {
//   dtMenu.classList.toggle("active");
// }
menuEmail.addEventListener("click", () => {
  const isAsideClosed = aside.classList.contains("active");
  if (!isAsideClosed) {
    aside.classList.add("active");
  }

  dtMenu.classList.toggle("active");
});

//*Componente 03
const hamBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobileMenu");

// hamBtn.addEventListener("click", toggleMobileMenu);
// function toggleMobileMenu() {
//   mobileMenu.classList.toggle("active");
// }
hamBtn.addEventListener("click", () => {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("active");
  }
  mobileMenu.classList.toggle("active");
});

//*Componente 04
const menuCarritoIcon = document.querySelector(".nbShoppingCart");
const aside = document.querySelector(".product-detail");

menuCarritoIcon.addEventListener("click", () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("active");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("active");
  }
  aside.classList.toggle("active");

  const isDesktopMenuClosed = dtMenu.classList.contains("active");
  if (!isDesktopMenuClosed) {
    dtMenu.classList.add("active");
  }
  // aside.classList.toggle("active");
});
