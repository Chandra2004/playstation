// NAME USER TITLE BAR
    function getURLParameter(nama) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nama);
    }
    var nama = getURLParameter('nama');
    document.title = "Selamat Datang " + nama + " | CTA GAMES";

// NUMBER ROOM / TABLE
    const numRoom = localStorage.getItem('numRoom');
    const labGuest = document.getElementById('numGuest');
    labGuest.textContent += numRoom;

// EROR IF ROOM / TABLE (NULL)
    if(numRoom === "null") {
        window.location.href = '../../pages/error-pages/error400.html';
    }