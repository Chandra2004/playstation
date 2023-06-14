// URL PARAMETER (Number Room)
  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const newNumber = urlParams.get('numroom');
    
    if (newNumber) {
      document.getElementById("number").innerHTML = newNumber;     
    }

    localStorage.setItem('numRoom', newNumber);
  };

// NAMA USER (Username)
  var urlParams = new URLSearchParams(window.location.search);
  var nama = urlParams.get('nama');
  var label = document.getElementById('nama');
  label.textContent += nama;

// BACGROUND CHANGE
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

// VERSION TEXT
  var versions = document.getElementById("versions-text");
  versions.innerHTML = "Version 1.00.0.3"; 

