export function scrollIntoContainers() {
  const rightContainer = document.querySelector('.right-container');
  const leftContainer = document.querySelector('.left-container');
  $(".scroll-to-right").on("click", () => {
    rightContainer.scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
  })
  $(".scroll-to-left").on("click", () => {
    leftContainer.scrollIntoView({behavior: "smooth", block: "center", inline: "end"})
  })
}