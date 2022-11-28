import { timer } from "../timer.js";
import { $toggleSwitchSlider } from "../toggleSwitch.js";

export function timerStyles() {
  $(document).ready(() => {
    const { hours, minutes, seconds } = timer;
    const numberContainersArray = [
      $(".hours input"),
      $(".minutes input"),
      $(".seconds input"),
    ];

    if (hours === 0 && minutes === 0 && seconds === 0) {
      if ($toggleSwitchSlider.val() === "light") {
        $("#timer-start")
          .html("<img style= 'opacity: 0.5' src='images/play.png'>")
          .css("background-color", "#008cff7e");
        $("#timer-reset")
          .html("<img style='opacity: 0.5;' src='images/undo-black.png'>")
          .css("background-color", "transparent");
        $("#timer-soundpicker")
          .html("<img style='opacity: 1;' src='images/bell-black.png'>")
          .css("background-color", "transparent");
      } else {
        $("#timer-start")
          .html("<img style= 'opacity: 0.5' src='images/play.png'>")
          .css("background-color", "#008cff7e");
        $("#timer-reset")
          .html("<img style='opacity: 0.5;' src='images/undo-white.png'>")
          .css("background-color", "transparent");
        $("#timer-soundpicker")
          .html("<img style='opacity: 1;' src='images/bell-white.png'>")
          .css("background-color", "transparent");
      }
    } else if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      if ($toggleSwitchSlider.val() === "light") {
        $("#timer-start")
          .html("<img style= 'opacity: 1' src='images/play.png'>")
          .css("background-color", "#008cff");
        $("#timer-reset")
          .html("<img style='opacity: 1;' src='images/undo-black.png'>")
          .css("background-color", "transparent");
      } else {
        $("#timer-start")
          .html("<img style= 'opacity: 1' src='images/play.png'>")
          .css("background-color", "#008cff");
        $("#timer-reset")
          .html("<img style='opacity: 1;' src='images/undo-white.png'>")
          .css("background-color", "transparent");
      }
    }
    numberContainersArray.forEach((container) => {
      container.first().css({
        marginTop: 25
      });
      container.last().css({
        marginBottom: 50,
      });
    });
  });
}
