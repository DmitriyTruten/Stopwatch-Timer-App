const toggleSwitchSlider = document.getElementById('toggle')
const stopWatchDisplay = document.getElementById("display");
const segmentDisplay = document.getElementById("segment-display");
const resetButton = document.getElementById("reset");
const segmentButton = document.getElementById("segment");
toggleSwitchSlider.addEventListener("click", toggleSwitch)

export function toggleSwitch() {
  if(toggleSwitchSlider.value === "light") {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    toggleSwitchSlider.value = "dark";
    stopWatchDisplay.style.color = "white";
    segmentDisplay.style.color = "white";
    stopWatchDisplay.style.backgroundColor = "transparent";
    segmentDisplay.style.backgroundColor = "transparent";
    segmentButton.style.backgroundColor = "transparent";
    resetButton.style.backgroundColor = "transparent";
    segmentButton.innerHTML = "<img style='opacity: 0.5;' src='images/stopwatch-white.png'>";
    resetButton.innerHTML = "<img style='opacity: 0.5;' src='images/undo-white.png'>";
  } else {
    toggleSwitchSlider.value = "light"
    document.body.style.backgroundColor = "rgba(255, 255, 255)"
    stopWatchDisplay.style.backgroundColor = "transparent";
    segmentDisplay.style.backgroundColor = "transparent";
    stopWatchDisplay.style.color = "rgb(84, 84, 84)";
    segmentDisplay.style.color = "rgb(84, 84, 84)";
    segmentButton.innerHTML = "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>";
    resetButton.innerHTML = "<img style='opacity: 0.5;' src='images/undo-black.png'>";
  }
}