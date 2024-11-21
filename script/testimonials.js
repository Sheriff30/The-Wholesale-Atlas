const testimonials = [
  "The Wholesale Atlas Premium has been a game-changer in my real estate wholesaling journey. With this platform, I feel like I'm finally able to take my investing to the next level. The Premium subscription, especially the Lead Gen feature, is invaluable—it saves me so much time by delivering high-quality leads that match my specific investment criteria. Instead of spending hours sifting through potential deals, I can now focus on the opportunities that really matter.",
  "This platform is simply amazing. It has transformed the way I work by providing me with top-notch tools and features. The user interface is intuitive, and I particularly love the insights it provides for every deal.",
  "I was skeptical at first, but this platform exceeded my expectations. The customer support is great, and the tools are tailored for professionals like me. Highly recommended!",
];

let currentTestimonialIndex = 0;

const testimonialText = document.querySelector(".client-testimonials");
const nextButton = document.querySelector(".next-testimonial");

testimonialText.textContent = testimonials[currentTestimonialIndex];

nextButton.addEventListener("click", () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  testimonialText.textContent = testimonials[currentTestimonialIndex];
});
