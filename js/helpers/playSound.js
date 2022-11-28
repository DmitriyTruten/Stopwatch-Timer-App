export const sounds = {
  correct: "./sounds/correct.wav",
  happy: "./sounds/happy.wav",
  melodical: "./sounds/melodical.wav",
  positive: "./sounds/positive.wav",
  uplifting: "./sounds/uplifting.wav",
};

export function playSound(event) {
  switch (event.target.id) {
    case "correct":
    case "radio-correct":
      new Audio(sounds.correct).play();
      break;
    case "happy":
    case "radio-happy":
      new Audio(sounds.happy).play();
      break;
    case "melodical":
    case "radio-melodical":
      new Audio(sounds.melodical).play();
      break;
    case "positive":
    case "radio-positive":
      new Audio(sounds.positive).play();
      break;
    case "uplifting":
    case "radio-uplifting":
      new Audio(sounds.uplifting).play();
      break;
  }
}

export function soundOnCountdownEnd() {
  const selectedSoundID = localStorage.getItem("savedSound")
  switch (selectedSoundID) {
    case "correct":
      new Audio(sounds.correct).play();
      break;
    case "happy":
      new Audio(sounds.happy).play();
      break;
    case "melodical":
      new Audio(sounds.melodical).play();
      break;
    case "positive":
      new Audio(sounds.positive).play();
      break;
    case "uplifting":
      new Audio(sounds.uplifting).play();
      break;
  }
}
