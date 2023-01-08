const menu = document.getElementById("menu");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
