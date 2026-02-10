// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800, // Duration of animation in ms
    easing: "ease-out-cubic", // Easing function
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 100, // Offset (in px) from the original trigger point
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
