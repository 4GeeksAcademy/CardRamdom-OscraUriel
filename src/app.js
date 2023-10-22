/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.querySelectorAll("p.cardSuit").forEach(function(element) {
    element.innerHTML = randomSuit;
    if (randomSuit === "♦" || randomSuit === "♥") {
      element.style.color = "red";
    }
  });
  document.querySelector("#card-number").innerHTML =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
};
