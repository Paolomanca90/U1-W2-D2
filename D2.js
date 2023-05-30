/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a = 4
let b = 10

if(a > b){
  console.log('a è il numero intero più grande')
  }else if(a < b){
    console.log('b è il numero intero più grande')
  }else{
    console.log('i 2 numeri sono uguali')
  }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 7

if(number !== 5){
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number1 = 30

if(number1 % 5 === 0){
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = 10
let num2 = 18

if(num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8){
  console.log('uno dei numeri è uguale a 8 oppure la loro addizione/sottrazione è uguale a 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 35

if(totalShoppingCart > 50){
  console.log('Il totale da pagare è:', totalShoppingCart)
  }else{
    console.log('Il totale da pagare è:', totalShoppingCart + 10)
  }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalWithDisconunt = totalShoppingCart * 0.8

if(totalWithDisconunt > 50){
  console.log('Il totale da pagare è:', totalWithDisconunt)
  }else{
    console.log('Il totale da pagare è:', totalWithDisconunt + 10)
  }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let var1 = 10
let var2 = 30
let var3 = 20
let max
let min
let med

if(var1 > var2){
  max = var1
  min = var2
  }else{
    max = var2
    min = var1
  }

if(var3 > max){
  med = max
  max = var3
  }else if(var3 < min){
    med = min
    min = var3
    }else{
      med = var3
    }

console.log('max:'+ max + ' med:'+ med + ' min:'+min)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let variable = 25

if(typeof variable === 'number'){
  console.log('Il valore è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 12

if(numero % 2 === 0 && numero !== 0){
  console.log('Il numero fornito è pari')
  }else if(numero % 2 === 1){
    console.log('Il numero fornito è dispari')
  }else{
    console.log('Il numero fornito è 0')
  }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7

if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto"

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = []

for(let i=1; i<=10; i++){
   array.push(i)
}

console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.splice(length-1,1,100)

console.log(array)
