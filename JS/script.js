// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
//  e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
//  per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//pseudo codice: 
/* 
- chiedo il numero di chilometri che vuole percorrere l'utente e lo memorizzo
- chiedo l'età del passeggero e la memorizzo
- calcolo il prezzo del viaggio:
    - 0,21 € al km variabile
- se ha meno di 18 anni 20% di sconto da applicare
- se ha più di 65 anni 40% di sconto da applicare
- risultato cioè il prezzo: massimo due decimali dopo la virgola




*/

//inizio

const prezzoKm = 0.21;

// km da percorrere

let kmDaPercorrere = parseInt (prompt  ("Quanti km vuoi percorrere?"))

// età

let etàPasseggero = parseInt (prompt  ("Quanti anni hai?"))

// prezzo biglietto

let prezzoBiglietto = prezzoKm * kmDaPercorrere


// sconto biglietto under 18 20%

let scontoBiglietto18 = (prezzoBiglietto * 0,2)

//calcolo degli sconti

const prezzoUnder18 = prezzoBiglietto - scontoBiglietto18

// sconto biglietto over 65 40%

let scontoBiglietto65 = (prezzoBiglietto * 0,4)

//calcolo degli sconti


const prezzoOver65 = prezzoBiglietto - scontoBiglietto65



if (etàPasseggero <= 18) {

    prezzoBiglietto = prezzoUnder18.toFixed(2)
    
    document.writeln("Il tuo biglietto costa" + prezzoBiglietto + "€")


}


else if (etàPasseggero >= 65) {

    prezzoBiglietto = prezzoOver65.toFixed(2)

    document.writeln("Il tuo biglietto costa" + prezzoBiglietto + "€")

}

else {
    
    prezzoBiglietto = prezzoBiglietto.toFixed(2)

    document.writeln("Il tuo biglietto costa" + prezzoBiglietto + "€")
}




