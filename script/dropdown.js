const menubar = document.querySelector(".menubar");
const dropMenu = document.querySelector(".drop-menu");

menubar.addEventListener("click", () => {
  dropMenu.classList.toggle("active-menu");
});
