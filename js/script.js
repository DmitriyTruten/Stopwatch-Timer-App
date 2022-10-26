// Model
const stopWatch = {
  seconds: 0,
  miliseconds: 0,
  minutes: 0,
  waitingForPause: false,
  countdown: "off",
};

const segmentStopWatch = Object.assign({}, stopWatch);

let interval;
let segmentInterval;
let segmentCounter = 0;

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
    segmentStopWatch.waitingForPause = true;
    handleCountdown("stopWatch");
    if (segmentButton.value === "on") {
      handleCountdown("segment");
    }
  } else if (waitingForPause) {
    stopWatch.waitingForPause = false;
    segmentStopWatch.waitingForPause = false;
    clearInterval(interval);
    clearInterval(segmentInterval);
    resetButton.disabled = false;
    segmentButton.disabled = true;
    startButton.innerHTML = "Start";
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
    segmentInterval = setInterval(function () {
      segmentStopWatch.miliseconds += 1;
      if (segmentStopWatch.miliseconds === 100) {
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

function createSegment() {
  const secondSegmentContainer = document.getElementById("second");
  const segment = document.createElement("div");
  const secondSegment = document.createElement("div");
  const secondSegmentInnerContainer = document.createElement('div');
  let secondSegmentText = document.createElement('p');
  segmentCounter += 1;
  segment.innerHTML =
    checkMinutes("stopWatch") +
    ":" +
    checkSeconds("stopWatch") +
    "." +
    checkMiliseconds("stopWatch");
  secondSegment.innerHTML =
    checkMinutes("segment") +
    ":" +
    checkSeconds("segment") +
    "." +
    checkMiliseconds("segment");
  segment.style.display = "inline-block";
  segment.style.marginLeft = "50px";
  secondSegment.appendChild(segment)
  secondSegmentText.innerText = `Segment ${segmentCounter}`;
  if (segmentButton.value === "off") {
    if(secondSegment.innerHTML === "00:00.00") {
      secondSegment.innerHTML = segment.innerHTML;
    }
    secondSegmentInnerContainer.appendChild(secondSegmentText);
    secondSegmentInnerContainer.appendChild(secondSegment);
    secondSegmentContainer.appendChild(secondSegmentInnerContainer)
    handleCountdown("segment");
  }
  if (segmentStopWatch.countdown === "on") {
    secondSegmentInnerContainer.appendChild(secondSegmentText);
    secondSegmentInnerContainer.appendChild(secondSegment);
    secondSegmentContainer.appendChild(secondSegmentInnerContainer)
    resetSegmentStopWatch();
  }
  segmentStopWatch.waitingForPause = true;
  segmentStopWatch.countdown = "on";
  segmentButton.value = "on";
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
    const { miliseconds } = segmentStopWatch;
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
    const { seconds } = segmentStopWatch;
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

function resetStopWatch() {
  stopWatch.seconds = 0;
  stopWatch.miliseconds = 0;
  stopWatch.minutes = 0;
  stopWatch.countdown = "off";
}

function resetSegmentStopWatch() {
  segmentStopWatch.seconds = 0;
  segmentStopWatch.miliseconds = 0;
  segmentStopWatch.minutes = 0;
  segmentStopWatch.countdown = "off";
}

function resetCountdown() {
  const segmentContainer = document.getElementById("segment-container");
  const secondSegmentContainer = document.getElementById('second')
  const { waitingForPause } = stopWatch;
  if (!waitingForPause) {
    segmentCounter = 0;
    segmentButton.value = "off";
    segmentContainer.innerHTML = "";
    secondSegmentContainer.innerHTML = "";
    resetButton.disabled = true;
    resetStopWatch();
    resetSegmentStopWatch();
  }
  renderTime();
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
  if (segmentButton.value === "on") {
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
