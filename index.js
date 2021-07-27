
var randomNumber = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "Dice" + randomNumber + ".png"    /* dice 1.png  - dice 6.png */

var randomImageSource = "images/" + randomDiceImage;    /* it checks the folder images/dice 1 - dice 6 */

var image1 = document.querySelectorAll("img")[0];    /* selects for 0th images that is 1 */

image1.setAttribute("src" , randomImageSource);   



var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImage2);


if(randomNumber > randomNumber2){

document.querySelector("h1").innerHTML = "Player 1 You Won the Game!"

}
else if(randomNumber2 > randomNumber){
  document.querySelector("h1").innerHTML = "Player 2 You Won the Game!"
}
else{
  randomNumber === randomNumber2
  document.querySelector("h1").innerHTML = "You got Tied Each Other!"
}
