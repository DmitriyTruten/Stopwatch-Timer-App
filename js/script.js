// Model
const stopWatch = {
  seconds: 0,
  miliseconds: 0,
  minutes: 0,
  waitingForPause: false,
  countdown: 'off',
};

let interval;

// Controller
const startButton = document.getElementById("start");
startButton.addEventListener("click", StartCountdown);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCountdown);

const segmentButton = document.getElementById("segment");
segmentButton.addEventListener("click", createSegment);

function StartCountdown() {
  const { waitingForPause } = stopWatch;
  if (!waitingForPause) {
    stopWatch.waitingForPause = true;
    stopWatch.countdown = "on"
    startButton.innerHTML = "Stop";
    segmentButton.disabled = false;
    resetButton.disabled = true;
    handleCountdown();
  } else if (waitingForPause) {
    startButton.innerHTML = "Start";
    clearInterval(interval);
    stopWatch.waitingForPause = false;
    resetButton.disabled = false;
    segmentButton.disabled = true;
  } 
}

function handleCountdown() {
  interval = setInterval(function () {
    stopWatch.miliseconds += 1;
    if (stopWatch.miliseconds === 100) {
      stopWatch.seconds += 1;
      stopWatch.miliseconds = 0;
    }
    if (stopWatch.seconds === 60) {
      stopWatch.minutes += 1;
      stopWatch.seconds = 0;
    }
    renderTime();
  }, 10);
}

function resetCountdown() {
  const segmentContainer = document.getElementById("segment-container");
  const { waitingForPause } = stopWatch;
  if (!waitingForPause) {
    stopWatch.seconds = 0;
    stopWatch.miliseconds = 0;
    stopWatch.minutes = 0;
    segmentContainer.innerHTML = "";
    resetButton.disabled = true;
  }
  renderTime();
}

function createSegment() {
  const segmentContainer = document.getElementById("segment-container");
  const segment = document.createElement("div");
  segment.innerHTML =
    checkMinutes() + ":" + checkSeconds() + "." + checkMiliseconds();
  segmentContainer.appendChild(segment);
}

function checkMiliseconds() {
  const { miliseconds } = stopWatch;
  if (miliseconds < 10) {
    return "0" + stopWatch.miliseconds;
  } else {
    return stopWatch.miliseconds;
  }
}

function checkSeconds() {
  const { seconds } = stopWatch;
  if (seconds < 10) {
    return "0" + stopWatch.seconds;
  } else {
    return stopWatch.seconds;
  }
}

function checkMinutes() {
  const { minutes } = stopWatch;
  if (minutes < 10) {
    return "0" + stopWatch.minutes;
  } else {
    return stopWatch.minutes;
  }
}

// View
function renderTime() {
  const timeDisplay = document.getElementById("display");
  timeDisplay.value =
    checkMinutes() + ":" + checkSeconds() + "." + checkMiliseconds();
  timeDisplay.style.textAlign = "end";
}

renderTime();
