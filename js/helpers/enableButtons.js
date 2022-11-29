export function enableButtons() {
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", false);
  });
}

export function disableButtons() {
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", true);
  });
}