const pricingOptions = document.querySelectorAll(".pricing-option");
const priceTags = document.querySelectorAll(".price-tag");

pricingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    pricingOptions.forEach((opt) => opt.classList.remove("active-plan"));

    option.classList.add("active-plan");

    const selectedPlan = option.getAttribute("data-plan");

    priceTags.forEach((tag) => {
      const monthlyPrice = tag.getAttribute("data-monthly");
      const annualPrice = tag.getAttribute("data-annual");

      if (selectedPlan === "monthly") {
        tag.textContent = `$${monthlyPrice}/month`;
      } else if (selectedPlan === "annual") {
        tag.textContent = `$${annualPrice}/year`;
      }
    });
  });
});
