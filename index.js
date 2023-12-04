window.addEventListener("keydown", function (e) {
  console.log(e.keycode);

  const audio = this.document.querySelector(`audio[data-key="${e.which}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.which}"]`);
  if (!audio) return; // nothing will be happen
  audio.currentTime = 0; // come back
  audio.play();
  console.log(e.which);
});
