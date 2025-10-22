document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelector(".main-image");
  const redOverlay = document.querySelector(".red-overlay");
  const playingCards = document.querySelectorAll(".playing-card");
  const roseImages = document.querySelectorAll(".rose-image");
  const dashedCircle = document.querySelector(".dashed-circle");
  const redLines = document.querySelectorAll(".red-line");
  const roundImages = document.querySelectorAll(".round-image");

  function updateRandomVariables() {
    roundImages.forEach((factor) => {
      const randomX = Math.random() * 60 - 30;
      const randomY = Math.random() * 60 - 30;
      const randomRotate = Math.random() * 30 - 15; // 회전 폭을 조금 줄임

      factor.style.setProperty("--random-x", `${randomX}px`);
      factor.style.setProperty("--random-y", `${randomY}px`);
      factor.style.setProperty("--random-rotate", `${randomRotate}deg`);
    });
  }

  setInterval(updateRandomVariables, 2000);

  document.body.addEventListener("click", function () {
    mainImage.classList.toggle("show");
    redOverlay.classList.toggle("show");
    dashedCircle.classList.toggle("show");

    playingCards.forEach((card) => {
      card.classList.toggle("show");
    });
    roseImages.forEach((rose) => {
      rose.classList.toggle("show");
    });
    redLines.forEach((line) => {
      line.classList.toggle("show");
    });
    roundImages.forEach((factor) => {
      factor.classList.toggle("show");
    });
  });
});
