"use strict";


//Done: get players
const namePlayers = [{name: 'rikki', turnPosition: null},{name: 'cleo', turnPosition: null},{name: 'emma', turnPosition: null},{name: 'bella', turnPosition: null}];
//console.log(players);

//TODO: set turn order
let turnOrder = [];

//TODO: generate a random number
function getRandomInteger() {
  return Math.round(Math.random() * namePlayers.length);
}
//TODO: get the remainder from that number
let nextPlayer = getRandomInteger() % namePlayers.length;
console.log(nextPlayer);

//TODO: Make sure no repeat players are added

function newPlayerName(currentPlayerName,listPlayerName) {
  if (!listPlayerName.includes(currentPlayerName)) {
    return true
  };
};
//TODO: add players to the turn order
function setOrderList() {
  while(turnOrder.length < players.length){
    let nextPlayer = getRandomInteger() % namePlayers.length;
    namePlayers[nextPlayer].turnPosition = turnOrder.length;
    turnOrder.push(nextPlayer);
  };
};

const nameList = document.querySelector(".player-names");
const button = document.querySelector(".randomize-player");
const orderList = document.querySelector(".layer-orderList");



const createPlayerCard = (player) => {
  return '<li> ${player.name}</li>'
}

const addPlayerCards = (playersList) => {
  //list of player names
    nextPlayer.forEach(player => {
    //for each player add one to the unorder list using the create player card function
    nameList.innerHTML += createPlayerCard(player);
  });
};
addPlayerCards();

function namesRendered() {
  setOrderList()
  let playerSorted = playerNames.playerSorted((a, b) => a.turnPosition -b.turnPosition);
  orderList.innerHTML = '';
  playerSorted.forEach(player => {
  orderList.textContent += createPlayerCard(player);
  })

}

button.addEventListener("click", namesRendered);
