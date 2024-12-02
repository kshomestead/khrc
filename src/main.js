// main.js

// Import the logo SVG files
import logoLight from './assets/logo-light.svg';
import logoDark from './assets/logo-dark.svg';

document.addEventListener('DOMContentLoaded', () => {
  // Query all sections and nav buttons
  const sections = document.querySelectorAll('.section');
  const navButtons = document.querySelectorAll('.nav-button');
  const menuNavItems = document.querySelectorAll('.menu-nav-item');

  // Function to switch visible sections
  const switchSection = (targetId) => {
    console.log(`Switching to section: ${targetId}`);
    // Hide all sections
    sections.forEach((section) => {
      section.classList.remove('active');
    });

    // Remove active class from all buttons
    [...navButtons, ...menuNavItems].forEach((button) => {
      button.classList.remove('active');
    });

    // Show the target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
      targetSection.scrollIntoView({ behavior: 'smooth' });
      console.log(`Activated section: ${targetId}`);
    } else {
      console.error(`Section with id "${targetId}" not found.`);
    }

    // Highlight the active button
    [...navButtons, ...menuNavItems].forEach((button) => {
      if (button.getAttribute('data-target') === targetId) {
        button.classList.add('active');
        console.log(`Activated button: ${button.textContent}`);
      }
    });
  };

  // Add event listeners to all nav buttons
  [...navButtons, ...menuNavItems].forEach((button) => {
    const targetId = button.getAttribute('data-target');
    if (targetId) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Navigation button clicked: ${button.textContent}`);
        switchSection(targetId);

        // Close the menu if it's open (only for mobile menu)
        if (navMenu && navMenu.open) {
          navMenu.close();
          console.log('Menu closed after navigation.');
        }
      });
    }
  });

  // Menu Button and Menu
  const menuButton = document.getElementById('menu-button');
  const navMenu = document.getElementById('nav-menu');

  if (menuButton && navMenu) {
    // Open the menu when the menu button is clicked
    menuButton.addEventListener('click', (e) => {
      console.log('Menu button clicked.');
      navMenu.open = !navMenu.open; // Toggle the open property
      console.log(`Menu is now ${navMenu.open ? 'open' : 'closed'}.`);
    });
  } else {
    console.error('Menu button or nav-menu not found in the DOM.');
  }

  // Function to update the logo based on the theme
  const updateLogo = () => {
    const logoImage = document.getElementById('logo-image');
    const isDarkTheme = document.documentElement.classList.contains('dark-theme');

    if (logoImage) {
      logoImage.src = isDarkTheme ? logoDark : logoLight;
      console.log(`Logo updated to: ${logoImage.src}`);
    } else {
      console.error('Logo image element not found.');
    }
  };

  // Theme toggling
  const toggleThemeButton = document.getElementById('toggle-theme');
  if (toggleThemeButton) {
    toggleThemeButton.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-theme');
      const isDarkTheme = document.documentElement.classList.contains('dark-theme');
      toggleThemeButton.querySelector('.material-symbols-outlined').textContent = isDarkTheme ? 'light_mode' : 'dark_mode';

      // Save the user's theme preference
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
      console.log(`Theme toggled to: ${isDarkTheme ? 'dark' : 'light'}`);

      // Update the logo when the theme changes
      updateLogo();
    });
  } else {
    console.error('Toggle theme button not found in the DOM.');
  }

  // Initialize theme and logo on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    if (toggleThemeButton) {
      toggleThemeButton.querySelector('.material-symbols-outlined').textContent = 'light_mode';
    }
    console.log('Initialized theme to dark.');
  } else {
    document.documentElement.classList.remove('dark-theme');
    if (toggleThemeButton) {
      toggleThemeButton.querySelector('.material-symbols-outlined').textContent = 'dark_mode';
    }
    console.log('Initialized theme to light.');
  }

  // Update the logo based on the current theme
  updateLogo();

  // Initialize the first section as active
  switchSection('home');
});
