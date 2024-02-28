import { loadContactPage } from "./contactpage.js";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";

loadHomePage();
const navButtons = document.querySelectorAll("button");
navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove active class from all nav buttons
    navButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Add active class to the clicked nav button
    e.target.classList.add("active");
    switch (button.id) {
      case "home":
        loadHomePage();
        break;
      case "menu":
        loadMenuPage();
        break;
      case "contact":
        loadContactPage();
        break;
      default:
        break;
    }
  });
});
console.log(navButtons);
