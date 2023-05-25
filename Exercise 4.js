//Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const newArr = arrNumber2.filter(element => arrNumber1.includes(element) && arrNumber3.includes(element));

console.log(newArr);