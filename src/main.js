// main.js

// Import the logo SVG files
import logoLight from './assets/logo-light.svg';
import logoDark from './assets/logo-dark.svg';

document.addEventListener('DOMContentLoaded', () => {
  // Query all sections and nav buttons
  const sections = document.querySelectorAll('.section');
  const navButtons = document.querySelectorAll('.nav-button');

  // Function to switch visible sections
  const switchSection = (targetId) => {
    // ... existing code ...
  };

  // Add event listeners to all nav buttons
  // ... existing code ...

  // Function to update the logo based on the theme
  const updateLogo = () => {
    const logoImage = document.getElementById('logo-image');
    const isDarkTheme = document.documentElement.classList.contains('dark-theme');

    if (logoImage) {
      logoImage.src = isDarkTheme ? logoDark : logoLight;
    } else {
      console.error('Logo image element not found.');
    }
  };

  // Theme toggling
  const toggleThemeButton = document.getElementById('toggle-theme');
  toggleThemeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    const isDarkTheme = document.documentElement.classList.contains('dark-theme');
    toggleThemeButton.querySelector('.material-symbols-outlined').textContent = isDarkTheme ? 'light_mode' : 'dark_mode';

    // Save the user's theme preference
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');

    // Update the logo when the theme changes
    updateLogo();
  });

  // Initialize theme and logo on page load
  // Retrieve the saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    toggleThemeButton.querySelector('.material-symbols-outlined').textContent = 'light_mode';
  } else {
    document.documentElement.classList.remove('dark-theme');
    toggleThemeButton.querySelector('.material-symbols-outlined').textContent = 'dark_mode';
  }

  // Update the logo based on the current theme
  updateLogo();

  // Initialize the first section as active
  switchSection('home');
});
