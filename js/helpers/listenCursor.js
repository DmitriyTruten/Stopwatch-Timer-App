export function listenCursor() {
  $("body").on("mouseover", (event) => {
    if ($(event.target).is("button") && $(event.target).prop("disabled", false)) {
      $(event.target).css("cursor", "pointer");
    }
  });
}
