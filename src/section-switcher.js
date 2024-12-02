// Query all sections and buttons
const sections = document.querySelectorAll(".section");
const navbarButtons = document.querySelectorAll(".custom-button, .nav-item");

// Function to switch visible sections
const switchSection = (targetId) => {
  // Hide all sections
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth" });
  }

  // Highlight the active button
  navbarButtons.forEach((button) => {
    if (button.getAttribute("data-target") === targetId) {
      button.classList.add("highlight");
    } else {
      button.classList.remove("highlight");
    }
  });
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
