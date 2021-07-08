

var randomNumber1 = Math.random() * 5;
var randomNumber1 = Math.round(randomNumber1) + 1;

var randomDiceImg = "images/dice" + randomNumber1 + ".png"
var image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomDiceImg);

var randomNumber2 = Math.random() * 5;
var randomNumber2 = Math.round(randomNumber2) + 1;
var image2 = document.querySelectorAll('img')[1]
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png"

image2.setAttribute('src', randomDiceImg2);


  if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = 'Durrang'
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Birinchi yutdi"
    document.querySelector('h1').style.color = 'yellow'
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Ikkinchi yutdi"
    document.querySelector('h1').style.color = 'red'
  }
