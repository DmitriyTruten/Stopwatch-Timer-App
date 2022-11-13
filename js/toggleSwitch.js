const $segmentContainer = $("#segment-container");
const $segmentDisplay = $("#segment-display");
export const $toggleSwitchSlider = $("#toggle");
const $stopWatchDisplay = $("#display");
const $segmentButton = $("#segment");
const $resetButton = $("#reset");
const $startButton = $("#start")
const lines = document.querySelectorAll('#line');

$toggleSwitchSlider.on("click", toggleSwitch);

export function toggleSwitch() {
  if ($toggleSwitchSlider.val() === 'light') {
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
    $(document.body).css("background-color", "rgba(0, 0, 0, 0.8)");
    $stopWatchDisplay.css("background-color", "transparent");
    $segmentDisplay.css("background-color", "transparent");
    $segmentButton.css("background-color", "transparent");
    $resetButton.css("background-color", "transparent");
    $segmentContainer.css("color", "white");
    $stopWatchDisplay.css("color", "white");
    $segmentDisplay.css("color", "white");
    $toggleSwitchSlider.val("dark");
    lines.forEach((line) => {
      line.style.backgroundColor = "red";
    });
    if ($startButton.val() === "on") {
      $segmentButton.html(
        "<img style='opaci;ty: 1;' src='images/stopwatch-white.png'>"
      );
      $resetButton.html(
        "<img style='opacity: 0.5;' src='images/undo-white.png'>"
      );
    } else if ($startButton.val() === "off") {
      $segmentButton.html(
        "<img style='opacity: 0.5;' src='images/stopwatch-white.png'>"
      );
      $resetButton.html(
        "<img style='opacity: 1;' src='images/undo-white.png'>"
      );
    } else {
      $segmentButton.html(
        "<img style='opacity: 0.5;' src='images/stopwatch-white.png'>"
      );
      $resetButton.html(
        "<img style='opacity: 0.5;' src='images/undo-white.png'>"
      );
    }
  } else if($toggleSwitchSlider.val() === 'dark') {
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
    $toggleSwitchSlider.val("light");
    $(document.body).css("background-color", "rgb(255, 255, 255)");
    $stopWatchDisplay.css("background-color", "transparent");
    $segmentDisplay.css("background-color", "transparent");
    $stopWatchDisplay.css("color", "rgb(84, 84, 84)");
    $segmentDisplay.css("color", "rgb(84, 84, 84)");
    $segmentContainer.css("color", "black");
    lines.forEach((line) => {
      line.style.backgroundColor = "cyan";
    });
    if ($startButton.val() === "on") {
      $segmentButton.html(
        "<img style='opacity: 1;' src='images/stopwatch-black.png'>"
      );
      $resetButton.html(
        "<img style='opacity: 0.5;' src='images/undo-black.png'>"
      );
    } else if ($startButton.val() === "off") {
      $segmentButton.html(
        "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>"
      );
      $resetButton.html(
        "<img style='opacity: 1;' src='images/undo-black.png'>"
      );
    } else {
      $segmentButton.html(
        "<img style='opacity: 0.5;' src='images/stopwatch-black.png'>"
      );
      $resetButton.html(
        "<img style='opacity: 0.5;' src='images/undo-black.png'>"
      );
    }
  }
}
