//*==============================Componente 01 y 02
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

//*==============================Componente 03
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

//*==============================Componente 04
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

//*==============================COMPONENTE 05
const cardsContainer = document.querySelector(".cards-container");
const productList = [];
productList.push({
  name: "Laptop",
  price: 150,
  image:
    "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Mouse",
  price: 60,
  image:
    "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Keyboard",
  price: 90,
  image:
    "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Laptop",
  price: 150,
  image:
    "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Mouse",
  price: 60,
  image:
    "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Keyboard",
  price: 90,
  image:
    "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Laptop",
  price: 150,
  image:
    "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Mouse",
  price: 60,
  image:
    "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Keyboard",
  price: 90,
  image:
    "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    //Creando hijos ↓

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    //Creando hijos ↓

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    //Creando hijos ↓

    const productInfoFigure = document.createElement("figure");
    const productFigureImg = document.createElement("img");
    productFigureImg.setAttribute("src", "../icons/bt_add_to_cart.svg");
    //Creando hijos ↓
    productInfoFigure.appendChild(productFigureImg);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
