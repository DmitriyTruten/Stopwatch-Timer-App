export function rejectInput(container) {
  container.value = "";
  container.style.animation = "reject .5s ease-in-out";
  setTimeout(() => {
    container.style.animation = "none";
  }, 500);
}
