"use strict";

let data = [
  ["Бонг", 37],
  ["Калик", 36],
  ["Вейп", 38],
]
let sizes
let content = document.querySelector(".content");
let filters = document.querySelector(".filters");
filters.addEventListener("input", filterD);

function filterD() {
    sizes = [...filters.querySelectorAll(".size input:checked")].map(n=>n.value);
    console.log(sizes);
    ftovar();
}

function ftovar() {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++){
        if ( data[i][1] == sizes[j] ) {
            console.log(data[i][0]+" - "+ data[i][1]);
            }
        }
    }    
}