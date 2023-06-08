import { cacheDom } from "./modules/cacheDom.js";

(() => {
  const dom = cacheDom();
  
  dom.ageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Clicked!");
  });
})();
