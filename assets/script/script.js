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

const backgrounds = [
  "url('assets/image/bg-animation/bg-animation-01.jpg')",
  "url('assets/image/bg-animation/bg-animation-02.jpg')",
  "url('assets/image/bg-animation/bg-animation-03.jpg')",
  "url('assets/image/bg-animation/bg-animation-04.jpg')",
  "url('assets/image/bg-animation/bg-animation-05.jpg')"
];
let currentBackground = 0;
const backgroundElement = document.getElementById("background");

function changeBackground() {
  currentBackground = (currentBackground + 1) % backgrounds.length;
  backgroundElement.style.backgroundImage = backgrounds[currentBackground];
}

setInterval(changeBackground, 5000);