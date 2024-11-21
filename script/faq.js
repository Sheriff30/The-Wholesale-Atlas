const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".question");
  const answer = item.querySelector(".answer");
  const arrow = item.querySelector(".arrow-faq");

  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      const otherAnswer = otherItem.querySelector(".answer");
      const otherArrow = otherItem.querySelector(".arrow-faq");

      if (otherItem !== item) {
        otherAnswer.classList.remove("open");
        otherArrow.classList.remove("rotated");
      }
    });

    answer.classList.toggle("open");
    arrow.classList.toggle("rotated");
  });
});
