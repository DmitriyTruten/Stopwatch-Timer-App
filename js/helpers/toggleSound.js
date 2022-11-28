export function toggleSound(event) {
  const { target } = event;
  const currentSoundContainer = document.getElementsByClassName("active")[0];

  try {
    currentSoundContainer.className = currentSoundContainer.className.replace(
      " active",
      ""
    );

    if (target.className === "sound") {
      target.className += " active";
      target.querySelector("input").checked = true;
      localStorage.setItem("savedSound", target.id);
    } else if (target.className === "radio") {
      target.parentNode.className += " active";
      localStorage.setItem("savedSound", target.parentNode.id);
    } else if (target.className === "radio-label") {
      target.parentNode.className += " active";
      localStorage.setItem("savedSound", target.parentNode.id);
    }
  } catch (error) {
    return;
  }
}

export function getSavedSound() {
  const currentSoundContainer = document.getElementsByClassName("active")[0];
  const savedSound = document.getElementById(
    localStorage.getItem("savedSound")
  );
  currentSoundContainer.className = currentSoundContainer.className.replace(
    " active",
    ""
  );
  savedSound.className += " active";
  savedSound.querySelector("input").checked = true
}
