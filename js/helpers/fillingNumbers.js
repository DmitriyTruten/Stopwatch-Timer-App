// Generates numbers to fill numbers containers
export function fillingNumbers() {
  let value
  for (let i = 0; i < 60; i++) {
    if(i < 10) {
      value = "0" + i
    } else {
      value = i
    }
    $(".hours").append(
      `<input type="text" id=h${i} value=${value} disabled></input>`
    );
    $(".minutes").append(
      `<input type="text" id=m${i} value=${value} disabled></input>`
    );
    $(".seconds").append(
      `<input type="text" id=s${i} value=${value} disabled></input>`
    );
  }
}
