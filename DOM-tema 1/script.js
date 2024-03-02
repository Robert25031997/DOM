// selectam butonul pentru burger menu
const burgerMenuButton = document.querySelector(".menu-icon");
// selectam lista de elemente care trebuie afisate(ul)
const dropdownUl = document.querySelector("nav ul");

burgerMenuButton.addEventListener("click", function () {
  dropdownUl.classList.toggle("show-dropdown");
//   classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
});