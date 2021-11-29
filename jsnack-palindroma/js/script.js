/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione)*/

//senza funzione
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