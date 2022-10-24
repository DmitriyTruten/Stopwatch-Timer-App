// Model
const stopWatch = {
  timeDisplay: 0,
  waitingForPause: true,
};

// Controller
function countdown() {
  let interval = setInterval(function () {
    stopWatch.timeDisplay++;
    if (stopWatch.timeDisplay === 10) {
      clearInterval(interval);
    }
    renderTime();
  }, 1000);
};

const startButton = document.getElementById("start");
startButton.addEventListener("click", countdown);

// View
function renderTime() {
  const timeDisplay = document.getElementById("display");
  timeDisplay.value = stopWatch.timeDisplay;
  timeDisplay.style.textAlign = "end";
};

renderTime();
