// IMPORT LIBRARIES AND INITIALIZE STUFF

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

let isAnimated = false;
const hideText = document.querySelector(".category-text");

// CATEGORY BUTTONS

const politicsButton = document.querySelector(".politics-button");
const spaceButton = document.querySelector(".space");
const aviationButton = document.querySelector(".aviation");
const earthButton = document.querySelector(".earth");

// POPUPS

const pizzagateButton = document.querySelector(".pizzagate");
const closePizzagateButton = document.querySelector(".close-pizzagate");

const nwoButton = document.querySelector(".new-world-order");
const closeNwoButton = document.querySelector(".close-nwo");

const moonButton = document.querySelector(".moon");
const closeMoonButton = document.querySelector(".close-moonlanding");

const areaButton = document.querySelector(".area");
const closeAreaButton = document.querySelector(".close-area");

const flightButton = document.querySelector(".flight");
const closeFlightButton = document.querySelector(".close-flight");

const chemtrailsButton = document.querySelector(".chemtrails");
const closeChemtrailsButton = document.querySelector(".close-chemtrails");

const hollowButton = document.querySelector(".hollow");
const closeHollowButton = document.querySelector(".close-hollow");

const bermudaButton = document.querySelector(".bermuda");
const closeBermudaButton = document.querySelector(".close-bermuda");

// OPENING POPUPS

pizzagateButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".pizzagate-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(4)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

nwoButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".nwo-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

moonButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".moon-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(4)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

areaButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".area-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(4)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

flightButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".flight-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(4)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

chemtrailsButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".chemtrails-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

hollowButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".hollow-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(4)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

bermudaButton.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.fromTo(".bermuda-popup", { opacity: 0 }, { duration: 1, opacity: 1 })
    .fromTo(
      ".information",
      { x: -1000, y: 0, ease: "expo.out" },
      { duration: 1, x: -250, y: 0, ease: "back.out(1.7)" }
    )
    .fromTo(
      ".images img:first-of-type",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(2)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(3)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
    .fromTo(
      ".images img:nth-of-type(4)",
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    );
  hideText.style.opacity = "0";
});

// CLOSING POPUPS

closePizzagateButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    .to(".images img:nth-of-type(4)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".pizzagate-popup", { opacity: 0, duration: 1 });

  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

closeNwoButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    // .to(".images img:nth-of-type(4)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".nwo-popup", { opacity: 0, duration: 1 });

  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

closeMoonButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    .to(".images img:nth-of-type(4)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".moon-popup", { opacity: 0, duration: 1 });
  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

closeAreaButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    .to(".images img:nth-of-type(4)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".area-popup", { opacity: 0, duration: 1 });
  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

closeFlightButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    .to(".images img:nth-of-type(4)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".flight-popup", { opacity: 0, duration: 1 });
  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

closeChemtrailsButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".chemtrails-popup", { opacity: 0, duration: 1 });
  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

closeHollowButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    .to(".images img:nth-of-type(4)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".hollow-popup", { opacity: 0, duration: 1 });
  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

closeBermudaButton.addEventListener("click", () => {
  const tl2 = gsap.timeline();

  tl2
    .to(".images img:nth-of-type(4)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(3)", { opacity: 0, duration: 0.5 })
    .to(".images img:nth-of-type(2)", { opacity: 0, duration: 0.5 })
    .to(".images img:first-of-type", { opacity: 0, duration: 0.5 })
    .fromTo(
      ".information",
      { x: -250, y: 0 },
      {
        duration: 1,
        x: -1000,
        y: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.056,-0.008 0.405,-0.06 0.583,-0.086 0.795,0.184 0.856,0.408 0.984,0.885 1,1 1,1 "
        ),
      }
    )
    .to(".bermuda-popup", { opacity: 0, duration: 1 });
  setTimeout(() => {
    hideText.style.opacity = "1";
  }, 3500);
});

// TEXT AT THE TOP OF THE PAGE
gsap.from(".parallax-text", {
  y: -100,
  duration: 2,
});

// INTRODUCTION

gsap.from(".below h2", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".below h2",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".below h3:first-of-type", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".below h3:first-of-type",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".below article:first-of-type", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".below article:first-of-type",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".below article:nth-of-type(2)", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".below article:nth-of-type(2)",
    toggleActions: "restart none restart none",
  },
});

// ANIMATING THE BUBBLES

politicsButton.addEventListener("click", () => {
  if (!isAnimated) {
    gsap.to(".pizzagate", {
      y: 220,
      x: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.to(".new-world-order", {
      x: 170,
      y: 140,
      duration: 1,
      ease: "back.out(1.7)",
    });
    isAnimated = true;
  } else {
    gsap.to(".pizzagate", {
      y: 0,
      duration: 1,
    });
    gsap.to(".new-world-order", {
      x: 0,
      y: 0,
      duration: 1,
    });
    isAnimated = false;
  }
});

spaceButton.addEventListener("click", () => {
  if (!isAnimated) {
    gsap.to(".moon", {
      y: -200,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.to(".area", {
      x: 180,
      y: -120,
      duration: 1,
      ease: "back.out(1.7)",
    });
    isAnimated = true;
  } else {
    gsap.to(".moon", {
      y: 0,
      duration: 1,
    });
    gsap.to(".area", {
      x: 0,
      y: 0,
      duration: 1,
    });
    isAnimated = false;
  }
});

aviationButton.addEventListener("click", () => {
  if (!isAnimated) {
    gsap.to(".flight", {
      y: 190,
      x: -110,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.to(".chemtrails", {
      x: 80,
      y: 210,
      duration: 1,
      ease: "back.out(1.7)",
    });
    isAnimated = true;
  } else {
    gsap.to(".flight", {
      y: 0,
      x: 0,
      duration: 1,
    });
    gsap.to(".chemtrails", {
      x: 0,
      y: 0,
      duration: 1,
    });
    isAnimated = false;
  }
});

earthButton.addEventListener("click", () => {
  if (!isAnimated) {
    gsap.to(".hollow", {
      y: -170,
      x: -120,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.to(".bermuda", {
      x: 70,
      y: -200,
      duration: 1,
      ease: "back.out(1.7)",
    });
    isAnimated = true;
  } else {
    gsap.to(".hollow", {
      y: 0,
      x: 0,
      duration: 1,
    });
    gsap.to(".bermuda", {
      x: 0,
      y: 0,
      duration: 1,
    });
    isAnimated = false;
  }
});

// footer information

gsap.from(".footer h3:first-of-type", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer h3:first-of-type",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".footer h3:nth-of-type(2)", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".footer h3:nth-of-type(2)",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".footer h3:nth-of-type(3)", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".footer h3:nth-of-type(3)",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".footer p:first-of-type", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".footer p:first-of-type",
    toggleActions: "restart none restart none",
  },
});

gsap.from(".footer p:nth-of-type(2)", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".footer p:nth-of-type(2)",
    toggleActions: "restart none restart none",
  },
});

// footer timeline

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-animation",
  },
});

tl3
  .fromTo(
    ".filter-bubble",
    {
      scale: 0,
    },
    { duration: 10, scale: 30, ease: "linear", delay: 3 }
  )
  .fromTo(".trapped", { opacity: 0 }, { duration: 1, opacity: 1 })
  .fromTo(".reload", { opacity: 0 }, { duration: 1, opacity: 1, delay: 2 });
