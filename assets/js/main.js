
/* Mail */
//Chiedi all’utente la sua email

const userEmail = prompt("scrivi la tua e-mail");
//console.log(userEmail);
//controlla che sia nella lista di chi può accedere

//creo un array di e-mail che possono accedere
const accessEmail = [
    'dolcealessio1@gmail.com',
    'alessandrodelpiero10@libero.it',
    'rafanadal55@gmail.com',
    'michaeljordan12@hotmail.it',
    'walterwhite_heisenberg1@gmail.com'
]
//console.log(accessEmail); 

let isValid = "tu non puoi passare!";
document.querySelector('p').innerHTML=(isValid)
/* let notValid; */


//utilizzo il for per leggere ogni singola stringa
for (let i = 0; i < accessEmail.length; i++) {
    const element = accessEmail[i];
    //console.log(element);

    //tramite l'if controllo se l'email dell'utente è tra quelle che può accedere
    if (userEmail===element) {
        isValid = "BENVENUTO!";//'benvenuto';
        //console.log(isValid);
    }
}


console.log(isValid);
document.querySelector('p').innerHTML=(isValid)
//document.querySelector('p').innerHTML=(valid);

//stampa un messaggio appropriato sull’esito del controllo.





















//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const numPlayer = Math.floor(Math.random()*6+1);
const userDado= "il tuo dado è: " + numPlayer;
document.querySelector('div.user').innerHTML=(userDado);

const numBot = Math.floor(Math.random()*6+1);
const botDado= "il dado del bot è: " + numBot;
document.querySelector('div.bot').innerHTML=(botDado);


// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const ulElement = document.querySelector('ul')

if(numPlayer>numBot){
    const victory = 'il vincitore sei tu'
    
    const liElement = `<li>${victory}</li>`;
    ulElement.insertAdjacentHTML('afterbegin', liElement)

} else if (numPlayer<numBot){
    const lose = "il vincitore è il computer"
    const liElement = `<li>${lose}</li>`;
    ulElement.insertAdjacentHTML('afterbegin', liElement)

} else {
    const draw = "è un pareggio"
    const liElement = `<li>${draw}</li>`;
    ulElement.insertAdjacentHTML('afterbegin', liElement)
}
