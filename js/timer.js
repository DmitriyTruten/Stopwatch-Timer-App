// Model
const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  waitingForStart: true,
  countdown: "off",
};

// Controller
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
export function numberPicker() {
  inputContainers.forEach((container) => {
    container.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        scrollIntoNumber(event, container);
      }
    });
  });
}

function scrollIntoNumber(event, container) {
  if (event.target === inputContainers[0]) {
    let inputValue = container.value;
    if (inputValue > 59) {
      rejectInput(container);
    } else {
      const selectedNumber = document.getElementById(`h${inputValue}`);
      selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
      container.value = "";
    }
  } else if (event.target === inputContainers[1]) {
    let inputValue = container.value;
    if (inputValue > 59) {
      rejectInput(container);
    } else {
      const selectedNumber = document.getElementById(`m${inputValue}`);
      selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
      container.value = "";
    }
  } else {
    let inputValue = container.value;
    if (inputValue > 59) {
      rejectInput(container);
    } else {
      const selectedNumber = document.getElementById(`s${inputValue}`);
      selectedNumber.scrollIntoView({ behavior: "smooth", block: "center" });
      container.value = "";
    }
  }
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

// View
export function renderTimerView() {
  $("#timer-display").val(
    "0" + timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds
  );
}
