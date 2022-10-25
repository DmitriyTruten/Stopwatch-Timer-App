// Model
const stopWatch = {
  seconds: 0,
  miliseconds: 0,
  waitingForPause: false,
};

let interval;

// Controller
const startButton = document.getElementById("start");
startButton.addEventListener("click", countdown);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCountdown);

function countdown() {
  const { waitingForPause } = stopWatch;
  if (!waitingForPause) {
    stopWatch.waitingForPause = true;
    interval = setInterval(function () {
      stopWatch.seconds += 1;
      renderTime();
    }, 1000);
    console.log(stopWatch.waitingForPause);
  } else if (waitingForPause) {
    clearInterval(interval);
    stopWatch.waitingForPause = false;
    console.log(stopWatch.waitingForPause);
  }
}

function resetCountdown() {
  const { waitingForPause } = stopWatch;
  if(!waitingForPause) {
    stopWatch.seconds = 0;
  }
  renderTime();
}

// View
function renderTime() {
  const timeDisplay = document.getElementById("display");
  timeDisplay.value = `${stopWatch.seconds}.${stopWatch.miliseconds}`;
  timeDisplay.style.textAlign = "end";
}

renderTime();
