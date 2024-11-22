document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("testButton") as HTMLButtonElement | null;
  const output = document.getElementById("output") as HTMLParagraphElement | null;

  if (button && output) {
    button.addEventListener("click", () => {
      output.textContent = "TypeScript is working!";
    });
  } else {
    console.error("Button or output element is missing in the DOM.");
  }
});
