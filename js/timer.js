import {
  formatHours,
  formatMinutes,
  formatSeconds,
} from "./helpers/formatNumbers.js";
import { timerStyles } from "./helpers/timerStyles.js";
import { toggleModalBox } from "./helpers/toggleModalBox.js";
import { toggleSound, getSavedSound } from "./helpers/toggleSound.js";
import { playSound, soundOnCountdownEnd } from "./helpers/playSound.js";
import { innerScrollNumber } from "./helpers/innerScrollNumber.js";

// Model
export const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  waitingForStart: true,
  countdown: "off",
};

// Create interval storage for timer
let timerInterval;

// Controller

// Event listener for preventing early scrollIntoView stop 
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

// Function handle user input
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

// Distributes scroll in certain number containers  
function scrollIntoNumber(event, container) {
  if(container.value === '') {
    return
  }
  if (event.target === inputContainers[0]) {
    innerScrollNumber("hours", container);
  } else if (event.target === inputContainers[1]) {
    innerScrollNumber("minutes", container);
  } else {
    innerScrollNumber("seconds", container);
  }
}

// Contains basic event listeners for interaction with timer
export function handleUserInteractionsWithTimer() {
  $("#timer-start").on("click", () => {
    handleTimerStart();
  });
  $("#timer-reset").on("click", () => {
    handleTimerReset();
  });
  $("#timer-soundpicker").on("click", () => {
    toggleModalBox("on");
    getSavedSound();
  });
  $(".modal-container").on("click", (event) => {
    if ($(event.target).is($(".modal-container"))) {
      toggleModalBox("off");
    }
  });
  $(".modal-content").on("click", (event) => {
    toggleSound(event);
    playSound(event);
  });
}

// Handle timer StartButton state, starts/stops the countdown
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
    }, 990);
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

// Returns timer into the initial state
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
  selectedHoursNumber.scrollIntoView({ block: "center" });
  selectedMinutesNumber.scrollIntoView({ block: "center" });
  selectedSecondsNumber.scrollIntoView({ block: "center" });
}

// Changes the timer properties and renders it on timer display
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
      soundOnCountdownEnd();
    }
    renderTimerView();
  }, 1000);
}

// View

// Render changes, made by user
export function renderTimerDisplay(container) {
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

// Render timer object properties
export function renderTimerView() {
  $("#timer-display").val(
    formatHours() + ":" + formatMinutes() + ":" + formatSeconds()
  );
}
