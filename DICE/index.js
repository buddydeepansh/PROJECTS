function jss()
{
    //Generating 2 random numbers from 1 to 6
var randd1 = Math.random();
randd1 = Math.floor(randd1 * 6) + 1;

var randd2 = Math.random();
randd2 = Math.floor(randd2 * 6) + 1;
// console.log(randd);

//Generating random dice images
var playerOne = "images/dice" + randd1 + ".png";
var playerTwo = "images/dice" + randd2 + ".png";

// Updating images on webpage
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", playerOne);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", playerTwo);

// storing flag
var flg = "<i class='fas fa-flag'></i>";
// Displaying flag
if (randd1 > randd2) {
  document.querySelector("h1").innerHTML =
    flg + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Player 1 Wins!!";
} else if (randd2 > randd1) {
  document.querySelector("h1").innerHTML =
    "Player 2 Wins!! &nbsp;"+flg;
} else {
  document.querySelector("h1").innerHTML = "Draw !!!!";
}

}