//


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

for(let i = 0; i < invitedList.length; i++){
  if(invitedList[i].toUpperCase().includes(invitedInput.toUpperCase())){
    resultCheck = "Puoi partecipare";
    console.log("trovato");
    boxDice.append("qui si vedrà il dado");

  }
}


if(resultCheck == "Puoi partecipare"){
  const yourNumber = Math.floor(Math.random()*6) +1;
  console.log(yourNumber);
  const pcNumber = Math.floor(Math.random()*6) +1;
  console.log(pcNumber);
  let resultDice = "";

  if(yourNumber > pcNumber){
    resultDice = "Hai vinto";
  }else if (yourNumber < pcNumber){
    resultDice = "Hai perso";
  }else{
    resultDice = "avete pareggiato";
  }
  
  
}