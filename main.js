
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('inputList').addEventListener('input',function(e) {
  function lbsInput() {
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = Math.floor(lbs/0.0022046);
    document.getElementById('kilogramsOutput').innerHTML = Math.floor(lbs/2.2046);
    document.getElementById('ouncesOutput').innerHTML = lbs*16;
    document.getElementById('lbsOutput').innerHTML = lbs;

  }

lbsInput();

});
