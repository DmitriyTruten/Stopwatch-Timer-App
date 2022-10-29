const segmentDisplay = document.getElementById("segment-display");
const segmentContainer = document.getElementById("segment-container");
const toggleSwitchSlider = document.getElementById("toggle");
const stopWatchDisplay = document.getElementById("display");
const segmentButton = document.getElementById("segment");
const resetButton = document.getElementById("reset");

toggleSwitchSlider.addEventListener("click", toggleSwitch);

export function toggleSwitch() {
  if (toggleSwitchSlider.value === "light") {
    segmentContainer.style.color = "white";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    toggleSwitchSlider.value = "dark";
    stopWatchDisplay.style.color = "white";
    segmentDisplay.style.color = "white";
    stopWatchDisplay.style.backgroundColor = "transparent";
    segmentDisplay.style.backgroundColor = "transparent";
    segmentButton.style.backgroundColor = "transparent";
    resetButton.style.backgroundColor = "transparent";
    segmentButton.innerHTML =
      "<img style='opacity: 0.5;' src='images/stopwatch-white.png'>";
    resetButton.innerHTML =
      "<img style='opacity: 0.5;' src='images/undo-white.png'>";
    secondSegmentText.style.color = "white";
    segment.style.color = "white";
    secondSegment.style.color = "white";
  } else {
    toggleSwitchSlider.value = "light";
    segmentContainer.style.color = "black";
    document.body.style.backgroundColor = "rgba(255, 255, 255)";
    stopWatchDisplay.style.backgroundColor = "transparent";
    segmentDisplay.style.backgroundColor = "transparent";
    stopWatchDisplay.style.color = "rgb(84, 84, 84)";
    segmentDisplay.style.color = "rgb(84, 84, 84)";
    segmentButton.innerHTML =
      "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>";
    resetButton.innerHTML =
      "<img style='opacity: 0.5;' src='images/undo-black.png'>";
  }
}
