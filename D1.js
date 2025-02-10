/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*i principali datatype in JS sono stringe, numeri e boolene. 
1. le stringhe sono delle parole. Sono perciò dei dati formati da lettere, ma anche lettere e numeri o solo numeri.Per essere una stringa un valore deve trovarsi tra due " " oppure ' '. Perciò se ad esempio abbiamo "Mario" è una stringa. Se abbiamo "100" anche questa è una stringa anche se 100 per noi è un numero.

esempio const name ="Mario" è una stringa
        const number = 100 non è una stringa
        const stringNumber ="100" è una stringa

2. i numeri sono numeri, come li conosciamo. A differenza delle stringhe quando scrivo un valore che per JS deve essere un numero, devo semplicemente scriverlo e non comprenderlo tra nessuno virgoletta.

esempio const number = 100 è un numero

3. i booleani fanno riferimento a true e false. un valore per essere booleano deve quindi rispondere a dei criteri che scegliamo noi. Se un valore perciò non soddisfa i criteri che gli abbiamo dato sarà false, viceversa sarà true.

esempio */
let num1 = 2
let num2 = num1 + num1
console.log(num2 === 4) //true
console.log(num2 === 5) //false

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Chiara"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Sanasi"

const otherName = "Mario"
console.log(otherName)

/*otherName = "Giovanni" uscirà errore in console perchè una const è COSTANTE appunto, e non può variare a differenza di let (come è successo per la variabile myName*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"

console.log(name1 == name2)
console.log(name1 !== name2)
