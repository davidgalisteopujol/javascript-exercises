/*Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed()
Ejemplo de uso de la función:
*/

function roundTo(num,dec) {
    const multiplier = Math.pow(10, dec);
    const roundedNumber = Math.round(num * multiplier) / multiplier;

    return roundedNumber;
};


const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12

const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123457