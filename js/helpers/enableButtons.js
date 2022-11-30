// Functions changes buttons 'disabled' property depending on timer object
export function enableButtons() {
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", false);
  });
  $("#timer-start").val("on")
}

export function disableButtons() {
  const timerButtonContainerArray = [$("#timer-reset"), $("#timer-start")];
  timerButtonContainerArray.forEach((button) => {
    button.prop("disabled", true);
  });
  $("#timer-start").val("off")
}