// Model
const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  waitingForStart: true,
  countdown: "off",
};

let numberCounter = 0;

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

export function numberPicker() {

}

export function fillingNumbers() {
  for(let i = 0; i < 60; i++) {
    $(".hours").append(`<input type="text" id=h${i} value=${i} disabled></input>`);
    $(".minutes").append(`<input type="text" id=${i} value=${i} disabled></input>`);
    $(".seconds").append(`<input type="text" id=${i} value=${i} disabled></input>`);
  }
}

// View
export function renderTimerView() {
  $("#timer-display").val(
    "0" + timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds
  );
  
}
