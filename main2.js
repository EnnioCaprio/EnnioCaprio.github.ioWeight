document.getElementById('output__1').style.visibility = 'hidden';
document.getElementById('inputList__1').addEventListener('input',function(e) {
  function gInput() {
    document.getElementById('output__1').style.visibility = 'visible';
    let grams = e.target.value;
    document.getElementById('gramsOutput__1').innerHTML = grams;
    document.getElementById('kilogramsOutput__1').innerHTML = Math.floor(grams/1000);
    document.getElementById('ouncesOutput__1').innerHTML = Math.floor(grams/28.15);
    document.getElementById('lbsOutput__1').innerHTML = Math.floor(grams/453.592);

  }

gInput();

});
