"use strict";

const result = document.getElementById("result")
const year = parseInt(prompt("Veuillez insérer une année"))

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    result.innerHTML = "L'année est bissextile !"
else
    result.innerHTML = "L'année n'est pas bissextile !"