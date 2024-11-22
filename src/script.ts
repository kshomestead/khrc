import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Home page loaded!");

  // Smooth scroll to sections
  (window as any).scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
});
