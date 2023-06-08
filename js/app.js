import cacheDom from "./modules/cacheDom.js";

(() => {
  const dom = cacheDom();

  dom.ageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dayValue = +dom.dayInput.value;
    const monthValue = +dom.monthInput.value;
    const yearValue = +dom.yearInput.value;
    console.log(dayValue);
    console.log(monthValue);
    console.log(yearValue);
  });
})();
