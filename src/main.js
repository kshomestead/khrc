// main.js

// Query all sections and nav buttons
const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.nav-button');

// Function to switch visible sections
const switchSection = (targetId) => {
  // Hide all sections
  sections.forEach((section) => {
    section.classList.remove('active');
  });

  // Remove active class from all buttons
  navButtons.forEach((button) => {
    button.classList.remove('active');
  });

  // Show the target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Highlight the active button
  navButtons.forEach((button) => {
    if (button.getAttribute('data-target') === targetId) {
      button.classList.add('active');
    }
  });
};

// Add event listeners to all nav buttons
navButtons.forEach((button) => {
  const targetId = button.getAttribute('data-target');
  if (targetId) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      switchSection(targetId);
    });
  }
});

// Theme toggling
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  const isDarkTheme = document.documentElement.classList.contains('dark-theme');
  toggleThemeButton.querySelector('.material-symbols-outlined').textContent = isDarkTheme ? 'light_mode' : 'dark_mode';
});

// Initialize the first section as active
switchSection('home');
