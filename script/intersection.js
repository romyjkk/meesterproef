let particles = document.getElementById("waterparticles");

document.addEventListener("DOMContentLoaded", function () {
  const waterparticles = document.getElementById("waterparticles");
  const background = document.getElementById("below-background");
  const belowSection = document.querySelector(".below");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.target === belowSection) {
        if (entry.isIntersecting) {
          background.style.opacity = "1";
          waterparticles.style.opacity = "1";
        } else if (entry.boundingClientRect.y > 0) {
          waterparticles.style.opacity = "0";
          background.style.opacity = "0";
        }
      }
    });
  }, options);
  observer.observe(belowSection);
});
