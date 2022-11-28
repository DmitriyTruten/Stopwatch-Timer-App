export function toggleSound(event) {
  const { target } = event
  const currentSoundContainer = document.getElementsByClassName("active");
  try {
    currentSoundContainer[0].className =
      currentSoundContainer[0].className.replace(" active", "");

    if (target.className === "sound") {
      target.className += " active";
      target.querySelector("input").checked = true;
      localStorage.setItem("savedSound", target.id)

    } else if (target.className === "radio") {
      target.parentNode.className += " active";
      target.checked = true;
      localStorage.setItem("savedSound", target.parentNode.id)

    } else if (target.className === 'radio-label') {
      target.parentNode.className += " active";
      target.nextSibling.checked = true;
      localStorage.setItem("savedSound", target.parentNode.id)
    }
  } catch (error) {
    return
  }

}
