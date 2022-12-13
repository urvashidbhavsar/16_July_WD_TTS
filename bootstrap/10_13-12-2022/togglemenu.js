let disp_menu = document.querySelector(".disp-menu");
let nav_link = document.querySelector(".nav-link");

disp_menu.addEventListener("click", function () {
  nav_link.classList.toggle("list-menu");
});
