// Model
const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  waitingForStart: true,
  countdown: "off",
};

let previousScrollPosition = 0;
let NextScrollPosition = 50;

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
    number.addEventListener("scroll", (event) => {
      number.nextElementSibling.scrollIntoView()
      console.log(`previousScrollPosition: ${previousScrollPosition}`)
      console.log(`NextScrollPosition: ${NextScrollPosition}`)
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

export function fillingNumbers() {
  for(let i = 0; i < 60; i++) {
    $(".hours").append(`<div>${i}</div>`);
    $(".minutes").append(`<div>${i}</div>`);
    $(".seconds").append(`<div>${i}</div>`);
  }
}

// View
export function renderTimerView() {
  $("#timer-display").val(
    "0" + timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds
  );
  
}
