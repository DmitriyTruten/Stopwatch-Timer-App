const $segmentContainer = $("#segment-container");
const $segmentDisplay = $("#segment-display");
const toggleSwitchSlider = document.getElementById("toggle");
const $stopWatchDisplay = $("#display");
const segmentButton = document.getElementById("segment");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");
const lines = document.querySelectorAll(".line");

toggleSwitchSlider.addEventListener("click", toggleSwitch);

export function toggleSwitch() {
  if (toggleSwitchSlider.value === "light") {
    $(document).ready(() => {
      $(".segment-div").css("border-bottom", "1px solid rgb(255, 255, 255)");
      $("#timer-display").css("color", "white");
      $("#timer-reset").css("background-color", "transparent");
      $("#timer-soundpicker").css("background-color", "transparent");
      $("#timer-reset").html(
        "<img style='opacity: 0.5;' src='images/undo-white.png'>"
      );
      $("#timer-soundpicker").html(
        "<img style='opacity: 0.5;' src='images/bell-white.png'>"
      );
    });
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    $stopWatchDisplay.css("background-color", "transparent");
    $segmentDisplay.css("background-color", "transparent");
    segmentButton.style.backgroundColor = "transparent";
    resetButton.style.backgroundColor = "transparent";
    $segmentContainer.css("color", "white");
    $stopWatchDisplay.css("color", "white");
    $segmentDisplay.css("color", "white");
    toggleSwitchSlider.value = "dark";
    lines.forEach((line) => {
      line.style.backgroundColor = "red";
    });
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
    $(document).ready(() => {
      $(".segment-div").css("border-bottom", "1px solid");
      $("#timer-display").css("color", "rgb(84, 84, 84)");
      $("#timer-reset").html(
        "<img style='opacity: 0.5;' src='images/undo-black.png'>"
      );
      $("#timer-soundpicker").html(
        "<img style='opacity: 0.5;' src='images/bell-black.png'>"
      );
    });
    toggleSwitchSlider.value = "light";
    document.body.style.backgroundColor = "rgba(255, 255, 255)";
    $stopWatchDisplay.css("background-color", "transparent");
    $segmentDisplay.css("background-color", "transparent");
    $stopWatchDisplay.css("color", "rgb(84, 84, 84)");
    $segmentDisplay.css("color", "rgb(84, 84, 84)");
    $segmentContainer.css("color", "black");
    lines.forEach((line) => {
      line.style.backgroundColor = "cyan";
    });
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
