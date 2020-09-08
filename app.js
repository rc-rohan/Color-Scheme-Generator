

const colorDiv = document.querySelectorAll(".color-content");




function generateColors() {
  var scheme = new ColorScheme;
  scheme
    .from_hue(Math.floor(Math.random()*256))
    .scheme("triade")
    .distance(Math.random())
    .variation("pastel"); // Use the 'soft' color variation

  var colors = scheme.colors();
  console.log(colors);
  colorDiv.forEach((el,index)=>{
    const values= el.getElementsByClassName('values');
    values[0].innerHTML =  colors[index*2];
    el.style.background = `#${colors[index*2]}`;
  })
}
generateColors();

