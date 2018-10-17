document.getElementById('output__2').style.visibility = 'hidden';
document.getElementById('inputList__2').addEventListener('input',function(e) {
  function kgInput() {
    document.getElementById('output__2').style.visibility = 'visible';
    let klgrams = e.target.value;
    document.getElementById('gramsOutput__2').innerHTML = klgrams*1000;
    document.getElementById('kilogramsOutput__2').innerHTML = klgrams;
    document.getElementById('ouncesOutput__2').innerHTML = Math.floor(klgrams*35.274);
    document.getElementById('lbsOutput__2').innerHTML = Math.floor(klgrams*2.205);

  }

kgInput();

});
