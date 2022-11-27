const selectedSound = document.getElementsByClassName("active")[0].id;
console.log(selectedSound);
if (selectedSound === "happy") {
  let audio = new Audio();
  audio.src = "../../sounds/happy.wav";
  audio.play();
}
