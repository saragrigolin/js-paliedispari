/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione)*/

/*
//senza funzione metodo 1
let stringa = prompt('Inserisci una parola');

//splitto la stringa in parole e creo un array, sfruttando il metodo reverse
let splitString = stringa.split("");
let reverseArray = splitString.reverse();
let joinArray = reverseArray.join("");

//mostro la parola al contrario
console.log('parola scelta: ' + stringa);
console.log('parola al contrario: ' + joinArray);

//se sono uguali, allora
if (stringa == joinArray) {
    console.log('La parola ' + stringa + ' è palindroma.');
} else { //altrimenti
    console.log('La parola ' + stringa + ' non è palindroma.');
}
*/

/*
//senza funzione metodo 2
let string = prompt('Inserisci una parola');
let reverseString = "";
for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
}

//mostro la parola al contrario
console.log('parola scelta: ' + string);
console.log('parola al contrario: ' + reverseString);

//se sono uguali allora
if (string == reverseString) {
    console.log('La parola ' + string + ' è palindroma.');
} else { //altrimenti
    console.log('La parola ' + string + ' non è palindroma.');
}
*/

//con funzione metodo 2
function reverseStr(string){
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}

let string = prompt('Inserisci una parola');

//mostro la parola al contrario
console.log('parola scelta: ' + string);
console.log('parola al contrario: ' + reverseStr(string));

//se sono uguali allora
if (string == reverseStr(string)) {
    console.log('La parola ' + string + ' è palindroma.');
} else { //altrimenti
    console.log('La parola ' + string + ' non è palindroma.');
}