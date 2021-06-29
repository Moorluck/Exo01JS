"use strict";

const result = document.getElementById("result")
const date = Date.parse(prompt("Veuillez insérer une date (DD-MM-YYYY)"))

let msg = null

console.log(date)

if (isNaN(date.getTime)) {
    msg = "La date insérée est incorrecte"
}
else {
    msg = date.getMonth.toString()
}

result.innerHTML = msg