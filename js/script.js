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
    const userEmail = "miamail@live.it"
    const arrayEmail = ["cassone@gmail.com", "miamail@live.it", "palangarulez@outlook.com", "originaltemu@libero.it", "iamrealdeveloper@live.it"];


    for (let i = 0; i < arrayEmail.length; i++) {
        if (userEmail === arrayEmail[i]) {
            console.log("Accesso Eseguito");
            i = arrayEmail.length + 1;
        }
        if (userEmail != arrayEmail[i]) {
            console.log("Accesso Negato");
        }
    }
}

mail();