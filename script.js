document.addEventListener("DOMContentLoaded", function () {
  // --- 1. 애니메이션 대상 요소들 ---
  const mainImage = document.querySelector(".main-image");
  const redOverlay = document.querySelector(".red-overlay");
  const playingCards = document.querySelectorAll(".playing-card");
  const roseImages = document.querySelectorAll(".rose-image");
  const dashedCircle = document.querySelector(".dashed-circle");
  const redLines = document.querySelectorAll(".red-line");
  const roundImages = document.querySelectorAll(".round-image");
  const svgRectangle = document.querySelector(".rectangle");
  const mainText = document.querySelectorAll(".main-text");
  const titleText = document.querySelectorAll(".title-text");

  const interactiveVectors = document.querySelectorAll(".interactive-vector");

  function updateRandomVariables() {
    roundImages.forEach((factor) => {
      const randomX = Math.random() * 60 - 30;
      const randomY = Math.random() * 60 - 30;
      const randomRotate = Math.random() * 40 - 20;

      factor.style.setProperty("--random-x", `${randomX}px`);
      factor.style.setProperty("--random-y", `${randomY}px`);
      factor.style.setProperty("--random-rotate", `${randomRotate}deg`);
    });
  }

  setInterval(updateRandomVariables, 2000);

  interactiveVectors.forEach((vector) => {
    vector.addEventListener("click", function () {
      mainImage.classList.toggle("show");
      redOverlay.classList.toggle("show");

      svgRectangle.classList.toggle("show");
      mainText.forEach((textElement) => {
        textElement.classList.toggle("show");
      });
      titleText.forEach((textElement) => {
        textElement.classList.toggle("show");
      });

      const vectorId = vector.id;
      const idNumber = vectorId.split("-")[1];
      const imgClassSelector = ".rezeimg" + idNumber;
      const imgToChange = document.querySelector(imgClassSelector);
      if (imgToChange) {
        imgToChange.classList.toggle("grayscale-off");
      }

      vector.classList.toggle("vector-active");
    });
  });
});
