let icon = document.querySelector(".fa-moon");
let page_body = document.querySelector("body");

icon.addEventListener("click", function () {
  page_body.classList.toggle("dark-mode");

  if (page_body.classList.contains("dark-mode") == true) {
    icon.classList.remove("fa-moon");
    icon.innerHTML = "<span class='fa-solid fa-sun'></span>";
  } else {
    icon.classList.remove("fa-sun");
    icon.innerHTML = "<span class='fa-solid fa-moon'></span>";
  }
});
