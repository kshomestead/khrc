// Query all sections and buttons
const sections = document.querySelectorAll<HTMLElement>(".section");
const navbarButtons = document.querySelectorAll<HTMLButtonElement>(".custom-button, .nav-item");

// Function to switch visible sections
const switchSection = (targetId: string) => {
  // Hide all sections and deactivate buttons
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Add event listeners to all buttons
navbarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    if (targetId) {
      switchSection(targetId);
    }
  });
});
