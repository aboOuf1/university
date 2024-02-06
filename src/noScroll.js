const bodyEl = document.querySelector("body");
const checkedEl = document.querySelector(".navigation__button");

checkedEl.addEventListener("click", function () {
  bodyEl.classList.toggle("noScroll");
});
