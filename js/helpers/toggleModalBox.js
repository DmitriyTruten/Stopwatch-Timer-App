export function toggleModalBox(value) {
  if(value === 'on') {
    $(".modal-container").css("display", "block")
  } else if(value === 'off') {
    $(".modal-container").css("display", "none")
  }
}
