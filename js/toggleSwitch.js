export const $toggleSwitchSlider = $("#toggle");
const $segmentContainer = $("#segment-container");
const $segmentDisplay = $("#segment-display");
const $stopWatchDisplay = $("#display");
const $segmentButton = $("#segment");
const $resetButton = $("#reset");
const $startButton = $("#start");
const lines = document.querySelectorAll(".line");
const numbers = document.querySelectorAll("#number");
const $timerStartButton = $("#timer-start");

$toggleSwitchSlider.on("click", toggleSwitch);

export function toggleSwitch() {
  if ($toggleSwitchSlider.val() === "light") {
    $(document).ready(() => {
      if ($timerStartButton.val() === "on") {
        $("#timer-reset")
          .html("<img style='opacity: 1;' src='images/undo-white.png'>")
          .css("background-color", "transparent");
      } else {
        $("#timer-reset")
          .html("<img style='opacity: 0.5;' src='images/undo-white.png'>")
          .css("background-color", "transparent");
      }
      $(".segment-div").css("border-bottom", "1px solid rgb(255, 255, 255)");
      $("#timer-display").css("color", "white");
      $("#timer-soundpicker").css("background-color", "transparent");
      $("#timer-soundpicker").html(
        "<img style='opacity: 1;' src='images/bell-white.png'>"
      );
    });
    $(document.body).css("background-color", "rgba(25, 25, 25)");
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
    $(".input-container").children().css({
      backgroundColor: "transparent",
      borderColor: "white",
      color: "white",
    });
    $(".input-container").children().addClass("light-placeholder");
    $(".input-container").children().removeClass("dark-placeholder");
    $(".number-container").addClass("white-colon")
    $(".number-container").removeClass("black-colon")

    numbers.forEach((number) => {
      $(number).css({
        boxShadow: "inset 0px 0px 30px 15px rgb(25, 25, 25)",
      });
      $(number).children().css({
        color: "white",
        backgroundColor: "transparent",
      });
    });

    if ($startButton.val() === "on") {
      $segmentButton.html(
        "<img style='opacity: 1;' src='images/stopwatch-white.png'>"
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
  } else if ($toggleSwitchSlider.val() === "dark") {
    $(document).ready(() => {
      if ($timerStartButton.val() === "on") {
        $("#timer-reset")
          .html("<img style='opacity: 1;' src='images/undo-black.png'>")
          .css("background-color", "transparent");
      } else {
        $("#timer-reset")
          .html("<img style='opacity: 0.5;' src='images/undo-black.png'>")
          .css("background-color", "transparent");
      }
      $(".segment-div").css("border-bottom", "1px solid");
      $("#timer-display").css("color", "rgb(84, 84, 84)");
      $("#timer-soundpicker").html(
        "<img style='opacity: 1;' src='images/bell-black.png'>"
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
    $(".input-container").children().css({
      backgroundColor: "transparent",
      borderColor: "gray",
      color: "black",
    });
    $(".input-container").children().removeClass("light-placeholder");
    $(".input-container").children().addClass("dark-placeholder");
    $(".number-container").addClass("black-colon")
    $(".number-container").removeClass("white-colon")

    numbers.forEach((number) => {
      $(number).css({
        boxShadow: "inset 0px 0px 30px 15px  rgb(255, 255, 255)",
      });
      $(number).children().css({
        color: "black",
        backgroundColor: "transparent",
      });
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
