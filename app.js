const colorBlocks = document.querySelectorAll(".color-content");

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    generateColors();
  }
});

function generateColors() {
  variation = ["soft","pastel","light","hard","pale"];
  const random = Math.floor(Math.random()*4);
  console.log(random)
  var scheme = new ColorScheme();
  scheme
    .from_hue(Math.floor(Math.random() * 256))
    .scheme("triade")
    .distance(Math.random())
    .variation(variation[random]);

  var colors = scheme.colors();
  colorBlocks.forEach((el, index) => {
    el.id = colors[index * 2];
    const values = el.getElementsByClassName("values");
    values[0].innerHTML = colors[index * 2];
    el.style.background = `#${colors[index * 2]}`;
  });
}
generateColors();

colorBlocks.forEach((el) =>
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(`#${el.id}`);
  }));
