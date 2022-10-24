// Model
const stopWatch = {
  timeDisplay: 0,
  waitingForPause: false,
};

let interval;

// Controller
function countdown() {
  const { waitingForPause } = stopWatch; 
  if (waitingForPause === false) {
    stopWatch.waitingForPause = true;
    interval = setInterval(function() {
      stopWatch.timeDisplay += 1;
      renderTime();
    }, 1000);
    console.log(stopWatch.waitingForPause)
  } else if(waitingForPause) {
    clearInterval(interval)
    stopWatch.waitingForPause = false;
    console.log(stopWatch.waitingForPause)
  }
}
console.log(stopWatch.waitingForPause)

const startButton = document.getElementById("start");
startButton.addEventListener("click", countdown);

// View
function renderTime() {
  const timeDisplay = document.getElementById("display");
  timeDisplay.value = stopWatch.timeDisplay;
  timeDisplay.style.textAlign = "end";
}

renderTime();
