window.addEventListener("keydown", function (e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keycode}"]`);
  if (!audio) return; // nothing will be happen
  audio.currentTime = 0;
  audio.play();
  console.log(e);
});
