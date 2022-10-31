const segmentContainer = document.getElementById("segment-container");
const segmentDisplay = document.getElementById("segment-display");
const toggleSwitchSlider = document.getElementById("toggle");
const stopWatchDisplay = document.getElementById("display");
const segmentButton = document.getElementById("segment");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");
const line = document.getElementById('line');

toggleSwitchSlider.addEventListener("click", toggleSwitch);

export function toggleSwitch() {
  if (toggleSwitchSlider.value === "light") {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    stopWatchDisplay.style.backgroundColor = "transparent";
    segmentDisplay.style.backgroundColor = "transparent";
    segmentButton.style.backgroundColor = "transparent";
    resetButton.style.backgroundColor = "transparent";
    segmentContainer.style.color = "white";
    stopWatchDisplay.style.color = "white";
    segmentDisplay.style.color = "white";
    toggleSwitchSlider.value = "dark";
    line.style.backgroundColor = 'red';
    if (startButton.value === "on") {
      segmentButton.innerHTML =
        "<img style='opacity: 1;' src='images/stopwatch-white.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/undo-white.png'>";
    } else if (startButton.value === "off") {
      segmentButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/stopwatch-white.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 1;' src='images/undo-white.png'>";
    } else {
      segmentButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/stopwatch-white.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/undo-white.png'>";
    }
  } else {
    toggleSwitchSlider.value = "light";
    document.body.style.backgroundColor = "rgba(255, 255, 255)";
    stopWatchDisplay.style.backgroundColor = "transparent";
    segmentDisplay.style.backgroundColor = "transparent";
    stopWatchDisplay.style.color = "rgb(84, 84, 84)";
    segmentDisplay.style.color = "rgb(84, 84, 84)";
    segmentContainer.style.color = "black";
    line.style.backgroundColor = 'cyan';
    if (startButton.value === "on") {
      segmentButton.innerHTML =
        "<img style='opacity: 1;' src='images/stopwatch-black.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/undo-black.png'>";
    } else if (startButton.value === "off") {
      segmentButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 1;' src='images/undo-black.png'>";
    } else {
      segmentButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>";
      resetButton.innerHTML =
        "<img style='opacity: 0.5;' src='images/undo-black.png'>";
    }
  }
}
