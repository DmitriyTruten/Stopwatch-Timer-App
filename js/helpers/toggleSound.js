export function toggleSound(event) {
  const { target } = event
  const currentSoundContainer = document.getElementsByClassName("active");
  try {
    currentSoundContainer[0].className =
      currentSoundContainer[0].className.replace(" active", "");
  
    if (target.className === "sound") {
      target.className += " active";
      target.querySelector("input").checked = true;
  
    } else if (target.className === "radio") {
      target.parentNode.className += " active";
      target.checked = true;
    } else if (target.className === 'radio-label') {
      target.className += " active";
      target.nextSibling.checked = true;
    }
  } catch (error) {
    return
  }

}
