const modal = document.querySelector(".mobile-menu-container");
const modalMenu = document.querySelector(".mobile-menu");
const btnCloseModal = document.querySelector(".hamburger-logo-close");
const btnOpenModal = document.querySelector(".hamburger-logo");
console.log(btnOpenModal);

btnOpenModal.addEventListener("click", function () {
  modalMenu.classList.remove("hidden");
  modal.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", function () {
  modalMenu.classList.add("hidden");
  modal.classList.add("hidden");
});
