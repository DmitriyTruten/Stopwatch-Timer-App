export function enableButtons() {
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", false);
    button.css("cursor", "pointer")
  });
}

export function disableButtons() {
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", true);
    button.css("cursor", "default")
  });
}