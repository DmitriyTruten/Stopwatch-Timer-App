import {
  formatHours,
  formatMinutes,
  formatSeconds,
} from "./helpers/formatNumbers.js";
import { timerStyles } from "./helpers/timerStyles.js";
import { enableButtons } from "./helpers/enableButtons.js";
import { toggleModalBox } from "./helpers/toggleModalBox.js";
import { rejectInput } from "./helpers/rejectInput.js";

// Model
export const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  waitingForStart: true,
  countdown: "off",
};

let timerInterval;

// Controller
$(".input-container").on("keydown", (event) => {
  if (
    event.key === "ArrowRight" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowUp" ||
    event.key === "ArrowDown"
  ) {
    event.preventDefault();
  }
});

const inputContainers = document.querySelectorAll("#input-container");
const timerDisplay = document.getElementById("timer-display");
export function numberPicker() {
  inputContainers.forEach((container) => {
    container.addEventListener("keydown", (event) => {
      try {
        if (event.key === "Enter") {
          scrollIntoNumber(event, container);
        }
      } catch (error) {
        return;
      }
    });
  });
}

function scrollIntoNumber(event, container) {
  const timerStartButton = document.getElementById("timer-start");
  timerStartButton.value = "on";
  if (event.target === inputContainers[0]) {
    let inputValue = parseFloat(container.value);
    if (inputValue > 59 || inputValue < 0) {
      rejectInput(container);
    }
    const selectedNumber = document.getElementById(`h${inputValue}`);
    selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
    container.value = "";
    timer.hours = inputValue;
    enableButtons();
    timerStyles();
    renderTimerDisplay(container);
  } else if (event.target === inputContainers[1]) {
    let inputValue = parseFloat(container.value);
    if (inputValue > 59 || inputValue < 0) {
      rejectInput(container);
    }
    const selectedNumber = document.getElementById(`m${inputValue}`);
    selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
    timer.minutes = inputValue;
    container.value = "";
    enableButtons();
    timerStyles();
    renderTimerDisplay(container);
  } else {
    let inputValue = parseFloat(container.value);
    if (inputValue > 59 || inputValue < 0) {
      rejectInput(container);
    }
    const selectedNumber = document.getElementById(`s${inputValue}`);
    selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
    timer.seconds = inputValue;
    container.value = "";
    enableButtons();
    timerStyles();
    renderTimerDisplay(container);
  }
}

export function handleUserInteractionsWithTimer() {
  $("#timer-start").on("click", () => {
    handleTimerStart();
  });
  $("#timer-reset").on("click", () => {
    handleTimerReset();
  });
  $("#timer-soundpicker").on("click", () => {
    toggleModalBox("on");
  });
  $(".modal-container").on("click", (event) => {
    if ($(event.target).is($(".modal-container"))) {
      toggleModalBox("off");
    }
  });
}

function handleTimerStart() {
  const { waitingForStart } = timer;
  if (waitingForStart) {
    timerCountdown();
    timer.countdown = "on";
    timer.waitingForStart = false;
    $(".timer-reset").prop("disabled", true);
    $("#circle-line").css({
      animation: "reverse-circle 60.5s linear infinite",
    });
    $("#timer-start").html(
      "<img style='margin-left: 0px;' src='images/pause.png'>"
    );
    $(".timer-picker-container").css({
      animation: "disable-opacity 1s ease-in-out",
    });
    setTimeout(() => {
      $(".timer-picker-container").css({
        opacity: 0,
      });
      $(".timer-reset").prop("disabled", false);
    }, 1000);
  } else if (!waitingForStart) {
    clearInterval(timerInterval);
    timer.countdown = "off";
    timer.waitingForStart = true;
    $("#circle-line").css({
      animationPlayState: "paused",
    });
    $("#timer-start").html("<img src='images/play.png'>");
  }
}

function handleTimerReset() {
  const selectedHoursNumber = document.getElementById("h0");
  const selectedMinutesNumber = document.getElementById("m0");
  const selectedSecondsNumber = document.getElementById("s0");
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  const timerStartButton = document.getElementById("timer-start");

  timer.hours = 0;
  timer.minutes = 0;
  timer.seconds = 0;
  timer.countdown = "off";
  timer.waitingForStart = true;
  timerStartButton.value = "off";
  $(".timer-picker-container").css({
    opacity: 1,
    animation: "enable-opacity 1s ease-in-out",
  });
  $("#circle-line").css({
    animation: "none",
  });
  $("#timer-start").html("<img src='images/play.png'>");

  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", true);
  });

  renderTimerView();
  timerStyles();
  clearInterval(timerInterval);
  selectedHoursNumber.scrollIntoView();
  selectedMinutesNumber.scrollIntoView();
  selectedSecondsNumber.scrollIntoView();
}

function timerCountdown() {
  timerInterval = setInterval(() => {
    const { hours, minutes, seconds, countdown } = timer;
    timer.seconds--;
    if (timer.seconds === -1) {
      timer.seconds = 59;
      timer.minutes--;
    }
    if (timer.minutes === -1) {
      timer.minutes = 59;
      timer.hours--;
    }
    if (timer.hours === -1) {
      timer.hours = 59;
    }
    if (hours === 0 && minutes === 0 && seconds === 0 && countdown === "on") {
      handleTimerReset();
    }
    renderTimerView();
    console.log(timer);
  }, 1000);
}

// View
function renderTimerDisplay(container) {
  timerDisplay.style.animation = "update-opacity 1s linear";
  container.setAttribute("readonly", true);
  setTimeout(() => {
    renderTimerView();
  }, 500);
  setTimeout(() => {
    timerDisplay.style.animation = "none";
    container.removeAttribute("readonly");
  }, 1000);
}

export function renderTimerView() {
  $("#timer-display").val(
    formatHours() + ":" + formatMinutes() + ":" + formatSeconds()
  );
}
