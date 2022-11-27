export function playSound(event) {
  switch (event.target.id) {
    case "correct":
    case "radio-correct":
      new Audio("./sounds/correct.wav").play();
      break;
    case "happy":
    case "radio-happy":
      new Audio("./sounds/happy.wav").play();
      break;
    case "melodical":
    case "radio-melodical":
      new Audio("./sounds/melodical.wav").play();
      break;
    case "positive":
    case "radio-positive":
      new Audio("./sounds/positive.wav").play();
      break;
    case "uplifting":
    case "radio-uplifting":
      new Audio("./sounds/uplifting.wav").play();
      break;
  }
}
