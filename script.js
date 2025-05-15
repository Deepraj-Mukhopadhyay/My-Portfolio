const toggleButton = document.getElementById("toggle-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleButton.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});
