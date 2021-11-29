/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/

/*
//senza funzione
let user = prompt('Scrivi pari o dispari');
//controllo se l'utente ha inserito le parole giuste
while (user != "pari" && user != "dispari"){
    user = prompt('Scrivi pari o dispari');
}

let numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
//controllo se l'utente ha inserito il numero giusto
while (numberUser < 1 || numberUser > 5){
    numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

//creo un numero random e lo sommo con quello dell'utente
let numberPc = Math.floor(Math.random() * 5) + 1;
let sum = numberUser + numberPc;

//mostro le scelte dell'utente, il numero random e la somma
console.log('Utente: ' + user);
console.log('Nome scelto da utente: ' + numberUser);
console.log('Nome random del PC: ' + numberPc);
console.log('Somma: ' + sum);

//controllo chi ha vinto
if (sum % 2 == 0 && user == "pari" || sum % 2 != 0 && user == "dispari") {
    console.log('Ha vinto utente');
} else {
    console.log ('Ha vinto il PC');
}
*/

//con funzione
//funzione per creare numero random
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione per vedere se un numero è pari
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let user = prompt('Scrivi pari o dispari');
//controllo se l'utente ha inserito le parole giuste
while (user != "pari" && user != "dispari") {
    user = prompt('Scrivi pari o dispari');
}

let numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
//controllo se l'utente ha inserito il numero giusto
while (numberUser < 1 || numberUser > 5) {
    numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

//creo un numero random e lo sommo con quello dell'utente
let numberPc = randNum (1, 5);
let sum = numberUser + numberPc;

//mostro le scelte dell'utente, il numero random e la somma
console.log('Utente: ' + user);
console.log('Nome scelto da utente: ' + numberUser);
console.log('Nome random del PC: ' + numberPc);
console.log('Somma: ' + sum);

//controllo chi ha vinto
if (isEven(sum) == true && user == "pari" || isEven(sum) == false && user == "dispari") {
    console.log('Ha vinto utente');
} else {
    console.log('Ha vinto il PC');
}