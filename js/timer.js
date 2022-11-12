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

export function numberPicker() {
  const numbersArray = document.querySelectorAll('#number');
  numbersArray.forEach(number => {
    number.addEventListener("click", (event) => {
      if(event.target.matches(".hours")) {
        timer.hours += 1;
      } else if(event.target.matches(".minutes")) {
        timer.minutes += 1;
      } else {
        timer.seconds += 1;
      }
      renderTimerView()
    })
  });
}

// View
export function renderTimerView() {
  $("#timer-display").val(
    "0" + timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds
  );
  $(".hours").html(timer.hours)
  $(".minutes").html(timer.minutes)
  $(".seconds").html(timer.seconds)
}
