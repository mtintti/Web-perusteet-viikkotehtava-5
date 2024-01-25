function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function showRandomkuva() {
    var number = randomNumber(1, 6); 
    var imgPath = 'icons/img' + number + '.png'; 
    document.getElementById('kuva').src = imgPath; 
}

document.getElementById('dice').addEventListener('click', showRandomkuva);
