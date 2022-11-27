export function toggleSound(event) {
  const { target } = event
  const currentSoundContainer = document.getElementsByClassName("active");
  currentSoundContainer[0].className =
    currentSoundContainer[0].className.replace(" active", "");

  if (target.className === "sound") {
    target.className += " active";
    target.querySelector("input").checked = true;

  } else if (target.className === "radio") {
    target.parentNode.className += " active";
    target.checked = true;
  }
}
