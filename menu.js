(() => {
    const refs = {
        openModalBtn: document.querySelector(".hamburger-logo"),
        closeModalBtn: document.querySelector("btn-close-menu"),
        Modal: document.querySelector(".mobile-menu-container"),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
        backdrop.classList.toggle("is-open");
    }
})();



// const button = document.querySelector(".hamburger-logo");
// const backdrop = document.querySelector(".mobile-menu-container");
// button.addEventListener("click", toggleModal);
// backdrop.addEventListener("click", (e) => {
//   const target = e.target.closest(".btn-close-menu");
//   if (!target) {
//     return;
//   }
//   toggleModal();
// });
// function toggleModal() {
//   backdrop.classList.toggle("is-open");
// }


