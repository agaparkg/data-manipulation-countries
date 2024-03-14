// const url = "https://restcountries.com/v3.1/all";
import { data } from "./data.js";

// Q1 - Total Population - Number
// Q2 - # of independent countries - Number
// Q3 - Population of the country with ccn3: 275 - Number
// Q4 - # of countries that have more than 2 capital cities - Number
// Q5 - Index of country Liberia inside countries array - Number
// Q6 - Country that has max Population - Name
// Q7 - Frequency count of all countries for each continents - Object

const q1 = document.querySelector("#q1 td:last-child");
const q2 = document.querySelector("#q2 td:last-child");
const q3 = document.querySelector("#q3 td:last-child");
const q4 = document.querySelector("#q4 td:last-child");
const q5 = document.querySelector("#q5 td:last-child");
const q6 = document.querySelector("#q6 td:last-child");
const q7 = document.querySelector("#q7 td:last-child");

// Q1
let totalPop = 0;

for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].population);
  // totalPop = totalPop + data[i].population;
  totalPop += data[i].population;
}

q1.innerHTML = totalPop.toLocaleString();

// Q2

let totalInd = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].independent) {
    totalInd++;
    // totalInd += 1
  }
}

q2.innerHTML = totalInd;

// Q3

let ccn3_275;

for (let i = 0; i < data.length; i++) {
  if (data[i].ccn3 === "275") {
    ccn3_275 = data[i].population;
    // console.log(data[i].name.common);
  }
}

q3.innerHTML = ccn3_275.toLocaleString();

// Q4

let countriesMultiCaps = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].capital !== undefined && data[i].capital.length > 1) {
    // console.log(data[i].name.common);
    countriesMultiCaps++;
  }
}

q4.innerHTML = countriesMultiCaps;

// Q5
let countryIndex;

for (let i = 0; i < data.length; i++) {
  if (data[i].name.common === "Liberia") {
    countryIndex = i;
  }
}

q5.innerHTML = countryIndex;

// Q6
let maxPopCountry = -Infinity;
let countryName;

for (let i = 0; i < data.length; i++) {
  if (maxPopCountry < data[i].population) {
    maxPopCountry = data[i].population;
    countryName = data[i].name.common;
  }
}

// for (let i = 0; i < data.length; i++) {
//   if (maxPopCountry === data[i].population) {
//     countryName = data[i].name.common;
//   }
// }

console.log(maxPopCountry.toLocaleString(), countryName);
// q6.innerHTML = countryName;
// q6.innerText = countryName;
q6.textContent = countryName;

// Q7

const obj = {};

// Frequency count
// [1,2,2,2,1,1,1,3,4,5,5,5,5]
// {
//     "1": 10,
//     "2": 4
// }

// {
//     "Europe": 2,
// }
// console.log(obj.hasOwnProperty("name"));
// nested for loops

for (let i = 0; i < data.length; i++) {
  const countryConts = data[i].continents; // ["Europe"]

  for (let j = 0; j < countryConts.length; j++) {
    if (obj.hasOwnProperty(countryConts[j])) {
      obj[countryConts[j]]++;
    } else {
      obj[countryConts[j]] = 1; // "Europe": 1
    }
  }
}

// console.log(obj);

q7.innerHTML = `<pre>${JSON.stringify(obj, null, 2)}</pre>`;
