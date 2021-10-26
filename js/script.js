
let invitedList = ["m", "ddd@hotmail.it", "ppp@yahoo.com"];

console.log(invitedList.length);
console.log(invitedList);

const invitedInput = prompt("scrivi il tuo nome per vedere se sei presente al elenco");

console.log(invitedInput.toUpperCase());

const container = document.querySelector("div");
const boxResult = document.createElement("div");
boxResult.className = "box";
container.append(boxResult);

let resultCheck = "Mi spiace, non sei presente nella lista di mail";

const boxDice = document.createElement("div");
boxDice.classList.add("box");
container.append(boxDice);

for(let i = 0; i < invitedList.length; i++){
  if(invitedList[i].toUpperCase().includes(invitedInput.toUpperCase()) && invitedInput.toUpperCase() != ""){
    resultCheck = "Puoi partecipare";
    console.log("trovato");
  }
}

boxResult.prepend(resultCheck);

//controlliamo se è stato aggiornato resulCheck per sapere se la mail era valida e di conseguenza peschiamo due numeri da uno a sei.

let resultDice = "";
const yourNumber = Math.floor(Math.random()*6) +1;
const pcNumber = Math.floor(Math.random()*6) +1;


if(resultCheck == "Puoi partecipare"){ 

  if(yourNumber > pcNumber){
    resultDice = "Hai vinto";
  }else if (yourNumber < pcNumber){
    resultDice = "Hai perso";
  }else{
    resultDice = "avete pareggiato";
  }

  
  boxDice.innerHTML = `
    Il tuo dado ha fatto "${yourNumber}"<br>
    il dado del computer ha fatto "${pcNumber}"<br>
      quindi ${resultDice}.
  `;
}



