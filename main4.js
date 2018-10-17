document.getElementById('output__3').style.visibility = 'hidden';
document.getElementById('inputList__3').addEventListener('input',function(e) {
  function oInput() {
    document.getElementById('output__3').style.visibility = 'visible';
    let ounces = e.target.value;
    document.getElementById('gramsOutput__3').innerHTML = Math.floor(ounces*28.35)
    document.getElementById('kilogramsOutput__3').innerHTML = Math.floor(ounces*35.274);
    document.getElementById('ouncesOutput__3').innerHTML = ounces;
    document.getElementById('lbsOutput__3').innerHTML = Math.floor(ounces/16);

  }

oInput();

});
