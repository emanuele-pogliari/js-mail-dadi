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
