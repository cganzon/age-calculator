export default function cacheDom() {
  const ageForm = document.querySelector(".age-form");
  const dayInput = document.querySelector(".day");
  const monthInput = document.querySelector(".month");
  const yearInput = document.querySelector(".year");
  return { ageForm, dayInput, monthInput, yearInput };
}
