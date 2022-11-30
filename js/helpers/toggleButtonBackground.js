import { $toggleSwitchSlider } from "../toggleSwitch.js";  

// Changes background color of buttons, depending on light/dark theme
export function toggleButtonBackground() {
  $("button").mousedown(function () {
    let color;
    if ($toggleSwitchSlider.val() === "light") {
      color = "rgb(211, 211, 211)";
    } else {
      color = "rgb(70, 70, 70)";
    }
    switch (this.id) {
      case "reset":
        $("#reset").css("background-color", `${color}`);
        break;
      case "segment":
        $("#segment").css("background-color", `${color}`);
        break;
      case "timer-reset":
        $("#timer-reset").css("background-color", `${color}`);
        break;
      case "timer-soundpicker":
        $("#timer-soundpicker").css("background-color", `${color}`);
        break;
    }
  });

  $("button").mouseup(function () {
    switch (this.id) {
      case "reset":
      case "segment":
      case "timer-reset":
      case "timer-soundpicker":
        $(this).css("background-color", "transparent");
    }
  });
}
