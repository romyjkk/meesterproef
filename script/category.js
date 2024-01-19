document.addEventListener("DOMContentLoaded", () => {
  const pizzagateButton = document.querySelector(".pizzagate");
  const closePizzagateButton = document.querySelector(".close-pizzagate");
  const pizzagatePopup = document.querySelector(".pizzagate-popup");

  const nwoButton = document.querySelector(".new-world-order");
  const closeNwoButton = document.querySelector(".close-nwo");
  const nwoPopup = document.querySelector(".nwo-popup");

  const moonlandingButton = document.querySelector(".moon");
  const closeMoonlandingButton = document.querySelector(".close-moonlanding");
  const moonlandingPopup = document.querySelector(".moon-popup");

  const areaButton = document.querySelector(".area");
  const closeAreaButton = document.querySelector(".close-area");
  const areaPopup = document.querySelector(".area-popup");

  const flightButton = document.querySelector(".flight");
  const closeFlightButton = document.querySelector(".close-flight");
  const flightPopup = document.querySelector(".flight-popup");

  const chemtrailsButton = document.querySelector(".chemtrails");
  const closeChemtrailsButton = document.querySelector(".close-chemtrails");
  const chemtrailsPopup = document.querySelector(".chemtrails-popup");

  const hollowButton = document.querySelector(".hollow");
  const closeHollowButton = document.querySelector(".close-hollow");
  const hollowPopup = document.querySelector(".hollow-popup");

  const bermudaButton = document.querySelector(".bermuda");
  const closeBermudaButton = document.querySelector(".close-bermuda");
  const bermudaPopup = document.querySelector(".bermuda-popup");

  pizzagateButton.addEventListener("click", () => {
    pizzagatePopup.classList.remove("hidden");
    pizzagatePopup.classList.add("shown");
  });

  nwoButton.addEventListener("click", () => {
    nwoPopup.classList.remove("hidden");
    nwoPopup.classList.add("shown");
  });

  moonlandingButton.addEventListener("click", () => {
    moonlandingPopup.classList.remove("hidden");
    moonlandingPopup.classList.add("shown");
  });

  areaButton.addEventListener("click", () => {
    areaPopup.classList.remove("hidden");
    areaPopup.classList.add("shown");
  });

  flightButton.addEventListener("click", () => {
    flightPopup.classList.remove("hidden");
    flightPopup.classList.add("shown");
  });

  chemtrailsButton.addEventListener("click", () => {
    chemtrailsPopup.classList.remove("hidden");
    chemtrailsPopup.classList.add("shown");
  });

  hollowButton.addEventListener("click", () => {
    hollowPopup.classList.remove("hidden");
    hollowPopup.classList.add("shown");
  });

  bermudaButton.addEventListener("click", () => {
    bermudaPopup.classList.remove("hidden");
    bermudaPopup.classList.add("shown");
  });

  closePizzagateButton.addEventListener("click", () => {
    setTimeout(() => {
      pizzagatePopup.classList.add("hidden");
      pizzagatePopup.classList.remove("shown");
    }, 4000);
  });

  closeNwoButton.addEventListener("click", () => {
    setTimeout(() => {
      nwoPopup.classList.add("hidden");
      nwoPopup.classList.remove("shown");
    }, 4000);
  });

  closeMoonlandingButton.addEventListener("click", () => {
    setTimeout(() => {
      moonlandingPopup.classList.add("hidden");
      moonlandingPopup.classList.remove("shown");
    }, 4000);
  });

  closeAreaButton.addEventListener("click", () => {
    setTimeout(() => {
      areaPopup.classList.add("hidden");
      areaPopup.classList.remove("shown");
    }, 4000);
  });

  closeFlightButton.addEventListener("click", () => {
    setTimeout(() => {
      flightPopup.classList.add("hidden");
      flightPopup.classList.remove("shown");
    }, 4000);
  });

  closeChemtrailsButton.addEventListener("click", () => {
    setTimeout(() => {
      chemtrailsPopup.classList.add("hidden");
      chemtrailsPopup.classList.remove("shown");
    }, 4000);
  });

  closeHollowButton.addEventListener("click", () => {
    setTimeout(() => {
      hollowPopup.classList.add("hidden");
      hollowPopup.classList.remove("shown");
    }, 4000);
  });

  closeBermudaButton.addEventListener("click", () => {
    setTimeout(() => {
      bermudaPopup.classList.add("hidden");
      bermudaPopup.classList.remove("shown");
    }, 4000);
  });
});
