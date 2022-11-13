// Model
const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  waitingForStart: true,
  countdown: "off",
};

let previousScrollPosition = 0;
let nextScrollPosition = 52;

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
  const $numbersArray = document.querySelectorAll('#number');
  $numbersArray.forEach(number => {
    number.onscroll = (event) => {
      if(number.scrollTop > previousScrollPosition) {
        number.scrollTo({top: nextScrollPosition, behavior: "smooth"})
        previousScrollPosition += 52;
        nextScrollPosition += 52;
      }
      if(number.scrollTop < previousScrollPosition) {
        number.scrollTo({top: previousScrollPosition, behavior: "smooth"})
        previousScrollPosition -= 52;
        nextScrollPosition -= 52;
      }
      console.log(`previousScrollPosition: ${previousScrollPosition}`)
      console.log(`NextScrollPosition: ${nextScrollPosition}`)
      if(event.target.matches(".hours")) {
        timer.hours += 1;
      } else if(event.target.matches(".minutes")) {
        timer.minutes += 1;
      } else {
        timer.seconds += 1;
      }
      renderTimerView()
    }
  });
}

export function fillingNumbers() {
  for(let i = 0; i < 60; i++) {
    $(".hours").append(`<input type="text" value=${i} disabled></input>`);
    $(".minutes").append(`<input type="text" value=${i} disabled></input>`);
    $(".seconds").append(`<input type="text" value=${i} disabled></input>`);
  }
}

// View
export function renderTimerView() {
  $("#timer-display").val(
    "0" + timer.hours + ":" + "0" + timer.minutes + ":" + "0" + timer.seconds
  );
  
}
