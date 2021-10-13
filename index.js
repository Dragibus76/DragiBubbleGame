const counterDisplay = document.querySelector("h3");
console.log(counterDisplay);
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  //taille des bulles
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  //positionement des bulles
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  //destruction au clic
  bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
    bubble.remove();
  });
  //timer
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
//intervalle
setInterval(bubbleMaker, 1000);
