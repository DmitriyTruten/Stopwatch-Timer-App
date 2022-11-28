import { timer } from "../timer.js";
import { renderTimerDisplay } from "../timer.js";
import { timerStyles } from "./timerStyles.js";
import { enableButtons, disableButtons } from "./enableButtons.js";

export function innerScrollNumber(value, container) {
  let inputValue = parseFloat(container.value);
  let selectedNumber;
  if (inputValue > 59 || inputValue < 0) {
    rejectInput(container);
  }
  switch (value) {
    case "hours":
      selectedNumber = document.getElementById(`h${inputValue}`);
      timer.hours = inputValue;
      break;
    case "minutes":
      selectedNumber = document.getElementById(`m${inputValue}`);
      timer.minutes = inputValue;
      break;
    case "seconds":
      selectedNumber = document.getElementById(`s${inputValue}`);
      timer.seconds = inputValue;
      break;
  }
  selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
  container.value = "";
  timerStyles();
  renderTimerDisplay(container);

  if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
    disableButtons();
  } else {
    enableButtons();
  }
}
