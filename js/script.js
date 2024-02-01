const diceElement = document.getElementById("uno");
const mailElement = document.getElementById("due");

diceElement.addEventListener("click", dice);
mailElement.addEventListener("click", mail);


function dice() {

    const computerChoice = Math.floor(Math.random() * 6 + 1);
    const userChoice = Math.floor(Math.random() * 6 + 1);

    console.log(computerChoice);
    console.log(userChoice);

    if (computerChoice === userChoice) {
        console.log("pareggio");
    }
    else if (computerChoice > userChoice) {
        console.log("perso");
    } else {
        console.log("vinto");
    }
}

function mail() {
    const arrayEmail = ["primo@gmail.com", "secondo@live.it", "terzo@outlook.com", "quarto@libero.it", "quinto@live.it"];


    let emailSearch = false;
    for (let i = 0; i < arrayEmail.length && !emailSearch; i++) {

        if (userEmail === arrayEmail[i]) {
            emailSearch = true;
        }
    }

    if (emailSearch === true) {
        console.log("email trovata");
    }
    else {
        console.log("email non trovata");
    }
}
