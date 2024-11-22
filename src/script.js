// script.js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("testButton");
    const output = document.getElementById("output");
  
    button.addEventListener("click", () => {
      output.textContent = "JavaScript is working!";
    });
  });
  