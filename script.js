// search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// click diluar element
const sb = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
// shopping cart
const sc = document.querySelector(".shopping-cart");
const scb = document.querySelector("#shopping-cart-button");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  sc.classList.toggle("active");
  e.preventDefault();
};

const scbt = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (!scbt.contains(e.target) && !sc.contains(e.target)) {
    sc.classList.remove("active");
  }
});
