const diceElement = document.getElementById("uno");
const mailElement = document.getElementById("due");
const resultElement = document.querySelector("#result");

const userDice = document.querySelector("#user");
const cpuDice = document.querySelector("#cpu");

diceElement.addEventListener("click", dice);
mailElement.addEventListener("click", mail);



function dice() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("dice-game").style.display = "block";

    const playBtnElement = document.getElementById("play");

    playBtnElement.addEventListener("click", function () {

        const computerChoice = Math.floor(Math.random() * 6 + 1);
        const userChoice = Math.floor(Math.random() * 6 + 1);

        const diceFaces = ['<i class="fa-solid fa-dice-one"></i>', '<i class="fa-solid fa-dice-two"></i>', '<i class="fa-solid fa-dice-three"></i>', '<i class="fa-solid fa-dice-four"></i>', '<i class="fa-solid fa-dice-five"></i>', '<i class="fa-solid fa-dice-six"></i>'];

        const diceFacesCpu = diceFaces[computerChoice - 1];
        const diceFacesPlayer = diceFaces[userChoice - 1];

        userDice.innerHTML = diceFacesPlayer;
        cpuDice.innerHTML = diceFacesCpu;

        playBtnElement.innerText = "Gioca Ancora"

        const gameResult = document.getElementById("result-game");

        if (computerChoice === userChoice) {
            gameResult.innerHTML = "Pareggio!"
        }
        else if (computerChoice > userChoice) {
            gameResult.innerHTML = "Hai Perso!"
        } else {
            gameResult.innerHTML = "Hai Vinto!"
        }
    })
}

function mail() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("mail-app").style.display = "block";

    const buttonMailElement = document.querySelector("#btnMail");
    const userMailElement = document.querySelector("#user-input");
    const arrayEmail = ["primo@gmail.com", "secondo@live.it", "terzo@outlook.com", "quarto@libero.it", "quinto@live.it"];

    buttonMailElement.addEventListener("click", function () {
        let emailSearch = false;
        for (let i = 0; i < arrayEmail.length && !emailSearch; i++) {

            if (userMailElement.value === arrayEmail[i]) {
                emailSearch = true;
            }
        }

        if (emailSearch === true) {
            resultElement.innerHTML = "Mail trovata nel database, accesso eseguito";
        }
        else {
            resultElement.innerHTML = `La Mail '${userMailElement.value}' non risulta nei nostri sistemi, registrati nel form qui sotto`;
            const regForm = document.createElement("button");
            regForm.classList.add("btn-success", "btn");
            regForm.innerHTML = "Registrati"
            document.querySelector("#reg-button").append(regForm);
        }
    })
}

const btnReload1 = document.querySelector("#btn_reload1");
const btnReload2 = document.querySelector("#btn_reload2");

btnReload1.addEventListener("click", function () {
    window.location.reload();
})

btnReload2.addEventListener("click", function () {
    window.location.reload();
})

