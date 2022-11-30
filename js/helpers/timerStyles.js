import { timer } from "../timer.js";
import { $toggleSwitchSlider } from "../toggleSwitch.js";

// Changes the appearance of timer
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
          .css({
            backgroundColor: "#008cff7e",
            cursor: "default",
          });   
        $("#timer-reset")
          .html("<img style='opacity: 0.5;' src='images/undo-black.png'>")
          .css({
            backgroundColor: "transparent",
            cursor: "default",
          });
        $("#timer-soundpicker")
          .html("<img style='opacity: 1;' src='images/bell-black.png'>")
          .css({
            backgroundColor: "transparent",
            cursor: "pointer",
          });
      } else {
        $("#timer-start")
          .html("<img style= 'opacity: 0.5' src='images/play.png'>")
          .css({
            backgroundColor: "#008cff7e",
            cursor: "default",
          });  
        $("#timer-reset")
          .html("<img style='opacity: 0.5;' src='images/undo-white.png'>")
          .css({
            backgroundColor: "transparent",
            cursor: "default",
          });
        $("#timer-soundpicker")
          .html("<img style='opacity: 1;' src='images/bell-white.png'>")
          .css({
            backgroundColor: "transparent",
            cursor: "pointer",
          });
      }
    } else if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      if ($toggleSwitchSlider.val() === "light") {
        $("#timer-start")
          .html("<img style= 'opacity: 1' src='images/play.png'>")
          .css({
            backgroundColor: "#008cff",
            cursor: "pointer"
          });
        $("#timer-reset")
          .html("<img style='opacity: 1;' src='images/undo-black.png'>")
          .css({
            backgroundColor: "transparent",
            cursor: "pointer",
          });
      } else {
        $("#timer-start")
          .html("<img style= 'opacity: 1' src='images/play.png'>")
          .css({
            backgroundColor: "#008cff",
            cursor: "pointer"
          });
        $("#timer-reset")
          .html("<img style='opacity: 1;' src='images/undo-white.png'>")
          .css({
            backgroundColor: "transparent",
            cursor: "pointer",
          });
      }
    }
    numberContainersArray.forEach((container) => {
      container.first().css({
        marginTop: 30,
      });
      container.last().css({
        marginBottom: 30,
      });
    });
  });
}
