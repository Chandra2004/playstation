const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');

const label = document.getElementById('nama');
label.textContent += nama;

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var newNumber = urlParams.get('numroom');
    
    if (newNumber) {
      document.getElementById("number").innerHTML = newNumber;     
    }
};