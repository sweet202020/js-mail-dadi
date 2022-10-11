
/* Mail */
//Chiedi all’utente la sua email

const userEmail = prompt("scrivi la tua e-mail");
console.log(userEmail);
//controlla che sia nella lista di chi può accedere

//creo un array di e-mail che possono accedere
const accessEmail = [
    'dolcealessio1@gmail.com',
    'alessandrodelpiero10@libero.it',
    'rafanadal55@gmail.com',
    'michaeljordan12@hotmail.it',
    'walterwhite_heisenberg1@gmail.com'
]
console.log(accessEmail); 
const ulElement = document.querySelector('ul');

//utilizzo il for per leggere ogni singola stringa
for (let i = 0; i < accessEmail.length; i++) {
    const element = accessEmail[i];
    console.log(element);

    //tramite l'if controllo se l'email dell'utente è tra quelle che può accedere
    if (userEmail===element){
        console.log('benvenuto');
        document.querySelector('p').innerHTML=('benvenuto')
    } 
}




//stampa un messaggio appropriato sull’esito del controllo.

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const numPlayer = Math.floor(Math.random()*6+1);
console.log("il tuo dado è: " + numPlayer);
const numBot = Math.floor(Math.random()*6+1);
console.log("il dado del bot è: " + numBot);


// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(numPlayer>numBot){
    console.log('il vincitore sei tu')
} else if (numPlayer<numBot){
    console.log("il vincitore è il computer")
} else {
    console.log("è un pareggio")
}



/* Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */