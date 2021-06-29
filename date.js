"use strict";

const result = document.getElementById("result")
const input = prompt("Veuillez insérer une date (DD-MM-YYYY)")
const date = new Date(input.substring(6), input.substring(3,5) - 1, input.substring(0,2))

let msg = ""

console.log(date)

if (!input.match(/^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/)) {
    msg = "La date insérée est incorrecte"
}
else {
    msg = date.toLocaleString("fr-BE", {weekday: "long"})
}
result.innerHTML = msg