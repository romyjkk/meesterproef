const ambience = new Audio("/sounds/underwater-ambience.mp3");
const playAudio = document.querySelector(".play-audio");
const pauseAudio = document.querySelector(".pause-audio");

const refreshButton = document.querySelector(".reload");

refreshButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
  window.location.reload(true);
});

playAudio.addEventListener("click", () => {
  ambience.play();
  pauseAudio.classList.remove("hidden");
  pauseAudio.classList.add("shown");
  playAudio.classList.remove("shown");
  playAudio.classList.add("hidden");
});

pauseAudio.addEventListener("click", () => {
  ambience.pause();
  playAudio.classList.remove("hidden");
  playAudio.classList.add("shown");
  pauseAudio.classList.remove("shown");
  pauseAudio.classList.add("hidden");
});
