document.addEventListener("click",t=>{let e=t.target.closest("md-filled-button");if(e&&e.hasAttribute("data-target")){let t=e.getAttribute("data-target");t?(console.log(`Navigating to ${t}`),window.location.assign(t)):console.error("Error: 'data-target' attribute is missing or invalid.")}});
//# sourceMappingURL=index.75f03682.js.map
