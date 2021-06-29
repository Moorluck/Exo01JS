"use strict";

const result = document.getElementById("result")
const cote = parseInt(prompt("Entrez une cote entre 1 et 20"))

let msg = null


if (cote === 20) {
    msg = "Excellent"
}
else if (cote > 16) {
    msg = "Très bien"
}
else if (cote > 12) {
    msg = "Bien"
}
else if (cote > 9) {
    msg = "Suffisant"
}
else if (cote > 7) {
    msg = "Insuffisant"
}
else if (cote >= 0) {
    msg = "Echec"
}
else {
    msg = "Valeur incorrect"
}

result.innerHTML = msg












