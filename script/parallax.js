let text = document.querySelector(".parallax-text");
let foreground = document.querySelector(".foreground");
let smallIceberg = document.querySelector(".middle-1");
let smallIcebergTwo = document.querySelector(".middle-2");
let applyTransforms = true;

const scrollHandler = () => {
  let value = window.scrollY;
  let viewportHeight = window.innerHeight;

  if (value >= viewportHeight) {
    text.style.marginTop = "";
    foreground.style.marginTop = value * -2 + "px";
  } else {
    text.style.marginTop = value * 1 + "px";
    smallIceberg.style.marginTop = value * 0.2 + "px";
    smallIcebergTwo.style.marginTop = value * 0.2 + "px";
    foreground.style.marginTop = value * -2 + "px";
  }
};

window.addEventListener("scroll", scrollHandler);
