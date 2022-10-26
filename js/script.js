// Model
const stopWatch = {
  seconds: 0,
  miliseconds: 0,
  minutes: 0,
  waitingForPause: false,
  countdown: "off",
};

const segmentStopWatch = Object.assign({}, stopWatch);
console.log("SegmentStopWatch: ", segmentStopWatch);

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
    stopWatch.countdown = "on";
    startButton.innerHTML = "Stop";
    segmentButton.disabled = false;
    resetButton.disabled = true;
    console.log("StopWatch: ", stopWatch);
    handleCountdown();
  } else if (waitingForPause) {
    startButton.innerHTML = "Start";
    clearInterval(interval);
    stopWatch.waitingForPause = false;
    resetButton.disabled = false;
    segmentButton.disabled = true;
    console.log("StopWatch: ", stopWatch);
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
    stopWatch.countdown = "off";
    segmentButton.value = "off";
    stopWatch.seconds = 0;
    stopWatch.miliseconds = 0;
    stopWatch.minutes = 0;
    segmentContainer.innerHTML = "";
    resetButton.disabled = true;
    console.log("StopWatch: ", stopWatch);
  }
  renderTime();
}

function createSegment() {
  const segmentContainer = document.getElementById("segment-container");
  const segment = document.createElement("div");
  segmentButton.value = 'on';
  segment.innerHTML =
    checkMinutes("stopWatch") +
    ":" +
    checkSeconds("stopWatch") +
    "." +
    checkMiliseconds("stopWatch");
  segmentContainer.appendChild(segment);
  console.log("StopWatch: ", stopWatch);
}

function checkMiliseconds(value) {
  if (value === "stopWatch") {
    const { miliseconds } = stopWatch;
    if (miliseconds < 10) {
      return "0" + stopWatch.miliseconds;
    } else {
      return stopWatch.miliseconds;
    }
  } else {
    const { miliseconds } = segmentStopWatch
    if (miliseconds < 10) {
      return "0" + segmentStopWatch.miliseconds;
    } else {
      return segmentStopWatch.miliseconds;
    }
  }
}

function checkSeconds(value) {
  if (value === "stopWatch") {
    const { seconds } = stopWatch;
    if (seconds < 10) {
      return "0" + stopWatch.seconds;
    } else {
      return stopWatch.seconds;
    }
  } else {
    const { seconds } = segmentStopWatch
    if (seconds < 10) {
      return "0" + segmentStopWatch.seconds;
    } else {
      return segmentStopWatch.seconds;
    }
  }
}

function checkMinutes(value) {
  if (value === "stopWatch") {
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
  const stopWatchDisplay = document.getElementById("display");
  const segmentDisplay = document.getElementById("segment-display");
  stopWatchDisplay.value =
    checkMinutes("stopWatch") +
    ":" +
    checkSeconds("stopWatch") +
    "." +
    checkMiliseconds("stopWatch");
    segmentDisplay.value = "";
    if(segmentButton.value === 'on') {
      segmentDisplay.value =
        checkMinutes("segment") +
        ":" +
        checkSeconds("segment") +
        "." +
        checkMiliseconds("segment");
    }
  stopWatchDisplay.style.textAlign = "end";
}

renderTime();
