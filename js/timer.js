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
    $("#timer-start").html("<img src='images/play.png'>");
    $("#timer-reset").html(
      "<img style='opacity: 0.5;' src='images/undo-black.png'>"
    );
    $("#timer-soundpicker").html(
      "<img style='opacity: 0.5;' src='images/bell-black.png'>"
    );
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
    let inputValue = container.value;
    if (inputValue > 59 || inputValue < 0) {
      rejectInput(container);
    }
    const selectedNumber = document.getElementById(`h${inputValue}`);
    selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
    container.value = "";
    timer.hours = inputValue;
    renderTimerDisplay(container);
  } else if (event.target === inputContainers[1]) {
    let inputValue = container.value;
    if (inputValue > 59 || inputValue < 0) {
      rejectInput(container);
    }
    const selectedNumber = document.getElementById(`m${inputValue}`);
    selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
    timer.minutes = inputValue;
    container.value = "";
    renderTimerDisplay(container);
  } else {
    let inputValue = container.value;
    if (inputValue > 59 || inputValue < 0) {
      rejectInput(container);
    }
    const selectedNumber = document.getElementById(`s${inputValue}`);
    selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
    timer.seconds = inputValue;
    container.value = "";
    renderTimerDisplay(container);
  }
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

function rejectInput(container) {
  container.value = "";
  container.style.animation = "reject .5s ease-in-out";
  setTimeout(() => {
    container.style.animation = "none";
  }, 500);
}

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
export function outerHandleTimerStart() {
  $("#timer-start").on("click", () => {
    innerHandleTimerStart();
  });
}

function innerHandleTimerStart() {
  const { waitingForStart } = timer;
  if (waitingForStart) {
    timerCountdown()
    timer.waitingForStart = false;
    $("#circle-line").css({
      animation: "reverse-circle 60.5s linear infinite",
    })
    $("#timer-start").html("<img style='margin-left: 0px;' src='images/pause.png'>");
  } else if (!waitingForStart) {
    clearInterval(timerInterval)
    timer.waitingForStart = true;
    $("#circle-line").css({
      animationPlayState: "paused",
    })
    $("#timer-start").html("<img src='images/play.png'>");
  }
}

function timerCountdown() {
  timerInterval = setInterval(() => {
    timer.seconds--
    timer.seconds.toString()
    console.log(timer)
    renderTimerView()
  }, 1000)
}

function formatNumbers() {
  const { hours, minutes, seconds } = timer;
  if (hours.length === 2 && minutes.length === 2 && seconds.length === 2) {
    return timer.hours + ":" + timer.minutes + ":" + timer.seconds;
  } else if (minutes.length === 2 && seconds.length === 2) {
    return "0" + timer.hours + ":" + timer.minutes + ":" + timer.seconds;
  } else if (hours.length === 2 && minutes.length === 2) {
    return timer.hours + ":" + timer.minutes + ":" + "0" + timer.seconds;
  } else if (hours.length === 2 && seconds.length === 2) {
    return timer.hours + ":" + "0" + timer.minutes + ":" + timer.seconds;
  } else if (hours.length === 2) {
    return timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds;
  } else if (minutes.length === 2) {
    return "0" + timer.hours + ":" + timer.minutes + ":" + "0" + timer.seconds;
  } else if (seconds.length === 2) {
    return "0" + timer.hours + ":" + "0" + timer.minutes + ":" + timer.seconds;
  } else {
    return (
      "0" + timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds
    );
  }

}

// View
export function renderTimerView() {
  $("#timer-display").val(formatNumbers());
}
