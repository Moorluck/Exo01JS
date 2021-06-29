"use strict";

const result = document.getElementById("result")
const input = prompt("Veuillez insérer une date (DD-MM-YYYY)")
const date = new Date(input.substring(6), input.substring(3,5) - 1, input.substring(0,2))

let msg = ""

console.log(date)

if (isNaN(date.getTime())) {
    msg = "La date insérée est incorrecte"
}
else {
    msg = date.toLocaleString("fr-BE", {weekday: "long"})
}
result.innerHTML = msg