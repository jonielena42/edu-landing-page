const toggleButton = document.getElementById("toggle-button");
const nav = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  console.log(toggleButton);
  console.log(nav);
  nav.classList.toggle("open");
});
