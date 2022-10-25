// Model
const stopWatch = {
  seconds: 0,
  miliseconds: 0,
  minutes: 0,
  waitingForPause: false,
};

const segmentStopWatch = Object.assign({}, stopWatch);

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
    startButton.innerHTML = "Stop";
    stopWatch.waitingForPause = true;
    handleCountdown("stopWatch");
  } else if (waitingForPause) {
    startButton.innerHTML = "Start";
    clearInterval(interval);
    stopWatch.waitingForPause = false;
  }
}

function handleCountdown(value) {
  if (value === "stopWatch") {
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
  } else {
    interval = setInterval(function () {
      segmentStopWatch.miliseconds += 1;
      if (stopWatch.miliseconds === 100) {
        segmentStopWatch.seconds += 1;
        segmentStopWatch.miliseconds = 0;
      }
      if (segmentStopWatch.seconds === 60) {
        segmentStopWatch.minutes += 1;
        segmentStopWatch.seconds = 0;
      }
      renderTime();
    }, 10);
  }
}

function resetCountdown() {
  const segmentContainer = document.getElementById("segment-container");
  const { waitingForPause } = stopWatch;
  if (!waitingForPause) {
    stopWatch.seconds = 0;
    stopWatch.miliseconds = 0;
    stopWatch.minutes = 0;
    segmentContainer.innerHTML = "";
  }
  renderTime();
}

function createSegment() {
  const segmentContainer = document.getElementById("segment-container");
  const segment = document.createElement("div");
  segment.innerHTML =
    checkMinutes() + ":" + checkSeconds() + "." + checkMiliseconds();
  segmentContainer.appendChild(segment);
  createSegmentCountdown();
}

function createSegmentCountdown() {
  const segmentDisplay = document.getElementById("segment-display");
  segmentDisplay.innerHTML = handleCountdown("segmentStopWatch");
}

function checkMiliseconds(value) {
  if(value === "stopWatch") {
    const { miliseconds } = stopWatch;
    if (miliseconds < 10) {
      return "0" + stopWatch.miliseconds;
    } else {
      return stopWatch.miliseconds;
    }
  } else {
    const { miliseconds } = segmentStopWatch;
    if (miliseconds < 10) {
      return "0" + segmentStopWatch.miliseconds;
    } else {
      return segmentStopWatch.miliseconds;
    }
  }
}

function checkSeconds(value) {
  if(value === "stopWatch") {
    const { seconds } = stopWatch;
    if (seconds < 10) {
      return "0" + stopWatch.seconds;
    } else {
      return stopWatch.seconds;
    }
  } else {
    const { seconds } = segmentStopWatch;
    if (seconds < 10) {
      return "0" + segmentStopWatch.seconds;
    } else {
      return segmentStopWatch.seconds;
    }
  }
}

function checkMinutes(value) {
  if(value === "stopWatch") {
    const { minutes } = stopWatch;
    if (minutes < 10) {
      return "0" + stopWatch.minutes;
    } else {
      return stopWatch.minutes;
    }
  } else {
    const { minutes } = segmentStopWatch;
    if (minutes < 10) {
      return "0" + segmentStopWatch.minutes;
    } else {
      return segmentStopWatch.minutes;
    }
  }
}

// View
function renderTime() {
  const timeDisplay = document.getElementById("display");
  const segmentDisplay = document.getElementById("segment-display");
  timeDisplay.value =
    checkMinutes("stopWatch") +
    ":" +
    checkSeconds("stopWatch") +
    "." +
    checkMiliseconds("stopWatch");
  segmentDisplay.value =
    checkMinutes("segmentStopWatch") +
    ":" +
    checkSeconds("segmentStopWatch") +
    "." +
    checkMiliseconds("segmentStopWatch");
  timeDisplay.style.textAlign = "end";
}

renderTime();
