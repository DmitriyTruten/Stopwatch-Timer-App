import { toggleSwitch } from "./toggleSwitch.js";

// Model
// Creating model of stopwatch object
const stopWatch = {
  seconds: 0,
  miliseconds: 0,
  minutes: 0,
  waitingForPause: false,
  countdown: "off",
};

// Copying stopwatch object
const segmentStopWatch = Object.assign({}, stopWatch);

// Define variables that will contain setInterval values;
let interval;
let segmentInterval;

// Creating counter for segmentText
let segmentCounter = 0;

// Controller

// Get access for buttons and adding EventListener
const startButton = document.getElementById("start");
startButton.innerHTML = "<img src='images/play.png'>";
startButton.addEventListener("click", StartCountdown);

const resetButton = document.getElementById("reset");
resetButton.innerHTML =
  "<img style='opacity: 0.5;' src='images/undo-black.png'>";
resetButton.addEventListener("click", resetCountdown);

const segmentButton = document.getElementById("segment");
segmentButton.innerHTML =
  "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>";
segmentButton.addEventListener("click", createSegment);

const toggleSwitchSlider = document.getElementById("toggle");

// Function handles the countdown process
function StartCountdown() {
  const { waitingForPause } = stopWatch;

  // If stopwatch object not waiting for pause then start the countdown
  if (!waitingForPause) {
    stopWatch.waitingForPause = true;
    segmentStopWatch.waitingForPause = true;
    stopWatch.countdown = "on";
    segmentButton.disabled = false;
    resetButton.disabled = true;
    handleCountdown("stopWatch");
    startButton.innerHTML =
      "<img style='margin-left: 0px;' src='images/pause.png'>";
    resetButton.innerHTML = "<img style='opacity: 0.5;' src='images/undo.png'>";

    if (toggleSwitchSlider.value === "dark") {
      segmentButton.innerHTML =
        "<img style='opacity: 1;' src='images/stopwatch-white.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/undo-white.png'>";
    } else {
      segmentButton.innerHTML =
        "<img style='opacity: 1;' src='images/stopwatch-black.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/undo-black.png'>";
    }

    // If segmentButton is pressed then start the countdown for copied stopwatch object(segmentStopWatch)
    if (segmentButton.value === "on") {
      handleCountdown("segment");
    }

    // Else if original stopwatch object waiting for pause - stop the countdown and invert both objects property values besides countdown property
  } else if (waitingForPause) {
    stopWatch.waitingForPause = false;
    segmentStopWatch.waitingForPause = false;
    resetButton.disabled = false;
    segmentButton.disabled = true;
    clearInterval(interval);
    clearInterval(segmentInterval);
    startButton.innerHTML = "<img src='images/play.png'>";
    segmentButton.innerHTML =
      "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>";
    resetButton.innerHTML = "<img style='opacity: 1;' src='images/undo.png'>";

    if (toggleSwitchSlider.value === "dark") {
      segmentButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/stopwatch-white.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 1;' src='images/undo-white.png'>";
    } else {
      segmentButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 1;' src='images/undo-black.png'>";
    }
  }
}
// Function gets access for interval variables, assign its values to setInterval function and invoke renderTime
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
  // Get access for segment-container and fill it dynamically created divs
  const SegmentContainer = document.getElementById("segment-container");
  const segment = document.createElement("div");
  const secondSegment = document.createElement("div");
  const secondSegmentInnerContainer = document.createElement("div");
  let secondSegmentText = document.createElement("p");

  // For every segmentButton click increment segmentCounter by 1
  segmentCounter += 1;

  // Invoking functions that format both object properties to "00:00.00" string and assign returned strings as values for dynamically created divs
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

  /* Checks if copied stopwatch object property are equal to zero in the moment of pressing segmentButton. If yes then first dynamically created div will contain same values for both stopwatch objects */
  if (secondSegment.innerHTML === "00:00.00") {
    secondSegment.innerHTML = segment.innerHTML;
  }

  /* Checking the segmentButton value. In both cases appending stopwatch objects. If segmentButton is already pressed - reset properties of copied stopWatch object but not stopping the countdown*/
  if (segmentButton.value === "off") {
    secondSegmentInnerContainer.appendChild(secondSegmentText);
    secondSegmentInnerContainer.appendChild(secondSegment);
    secondSegmentInnerContainer.classList.add("segment-div");
    SegmentContainer.appendChild(secondSegmentInnerContainer);
    handleCountdown("segment");
  }
  if (segmentStopWatch.countdown === "on") {
    secondSegmentInnerContainer.appendChild(secondSegmentText);
    secondSegmentInnerContainer.appendChild(secondSegment);
    secondSegmentInnerContainer.classList.add("segment-div");
    SegmentContainer.appendChild(secondSegmentInnerContainer);
    resetSegmentStopWatch();
  }
  if (toggleSwitchSlider.value === "dark") {

  }
  secondSegment.appendChild(segment);
  secondSegmentText.innerText = `Segment ${segmentCounter}`;
  segmentStopWatch.waitingForPause = true;
  segmentStopWatch.countdown = "on";
  segmentButton.value = "on";
}

// Functions getting access for both objects and format its property values
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

// Reset the stopWatch properties
function resetStopWatch() {
  stopWatch.seconds = 0;
  stopWatch.miliseconds = 0;
  stopWatch.minutes = 0;
  stopWatch.countdown = "off";
}

// Reset the copied stopwatch properties
function resetSegmentStopWatch() {
  segmentStopWatch.seconds = 0;
  segmentStopWatch.miliseconds = 0;
  segmentStopWatch.minutes = 0;
  segmentStopWatch.countdown = "off";
}

// Reset all values
function resetCountdown() {
  const SegmentContainer = document.getElementById("segment-container");
  const { waitingForPause } = stopWatch;
  if (toggleSwitchSlider.value === "dark") {
    resetButton.innerHTML =
      "<img style='opacity: 0.5;' src='images/undo-white.png'>";
  } else {
    resetButton.innerHTML =
      "<img style='opacity: 0.5;' src='images/undo-black.png'>";
  }
  if (!waitingForPause) {
    segmentCounter = 0;
    segmentButton.value = "off";
    SegmentContainer.innerHTML = "";
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

  // Displays formatted values in both input elements
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
}

renderTime();
