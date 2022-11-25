// Model
const timer = {
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

export function timerStyles() {
  $(document).ready(() => {
    const { hours, minutes, seconds } = timer;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      $("#timer-start")
        .html("<img style= 'opacity: 0.5' src='images/play.png'>")
        .css("background-color", "#008cff7e");
      $("#timer-reset").html(
        "<img style='opacity: 0.5;' src='images/undo-black.png'>"
      );
      $("#timer-soundpicker").html(
        "<img style='opacity: 1;' src='images/bell-black.png'>"
      );
    } else if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      $("#timer-start")
        .html("<img style= 'opacity: 1' src='images/play.png'>")
        .css("background-color", "#008cff");
      $("#timer-reset").html(
        "<img style='opacity: 1;' src='images/undo-black.png'>"
      );
    }
  });
}

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

function enableButtons() {
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", false);
  });
}

export function outerHandleTimerStart() {
  $("#timer-start").on("click", () => {
    innerHandleTimerStart();
  });
  $("#timer-reset").on("click", () => {
    handleTimerReset();
  });
}

function innerHandleTimerStart() {
  const { waitingForStart } = timer;
  if (waitingForStart) {
    timerCountdown();
    timer.countdown = "on";
    timer.waitingForStart = false;
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
  
  timer.hours = 0;
  timer.minutes = 0;
  timer.seconds = 0;
  timer.countdown = "off";
  timer.waitingForStart = true;
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
  timerStyles()
  clearInterval(timerInterval);
  selectedHoursNumber.scrollIntoView();
  selectedMinutesNumber.scrollIntoView();
  selectedSecondsNumber.scrollIntoView();
}

function timerCountdown() {
  timerInterval = setInterval(() => {
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
    renderTimerView();
    console.log(timer);
  }, 1000);
}

function formatHours() {
  const { hours } = timer;
  if (hours < 10) {
    return "0" + timer.hours;
  }
  return timer.hours;
}

function formatMinutes() {
  const { minutes } = timer;
  if (minutes < 10) {
    return "0" + timer.minutes;
  }
  return timer.minutes;
}

function formatSeconds() {
  const { seconds } = timer;
  if (seconds < 10) {
    return "0" + timer.seconds;
  }
  return timer.seconds;
}

// View
export function fillingNumbers() {
  for (let i = 0; i < 60; i++) {
    $(".hours").append(
      `<input type="text" id=h${i} value=${i} disabled></input>`
    );
    $(".minutes").append(
      `<input type="text" id=m${i} value=${i} disabled></input>`
    );
    $(".seconds").append(
      `<input type="text" id=s${i} value=${i} disabled></input>`
    );
  }
}

function rejectInput(container) {
  container.value = "";
  container.style.animation = "reject .5s ease-in-out";
  setTimeout(() => {
    container.style.animation = "none";
  }, 500);
}

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
