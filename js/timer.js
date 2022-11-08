// Model
const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  waitingForStart: true,
  countdown: "off",
};

// Controller
export function timerController() {
  $(document).ready(()=> {
    $("#timer-start").html("<img src='images/play.png'>")
    $("#timer-reset").html("<img style='opacity: 0.5;' src='images/undo-black.png'>")
    $("#timer-soundpicker").html("<img style='opacity: 0.5;' src='images/bell-black.png'>")
  })
}

// View
export function timerView() {
  // const { hours, minutes, seconds } = timer
  $("#timer-display").val(
    "0" + timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds
  );
}
