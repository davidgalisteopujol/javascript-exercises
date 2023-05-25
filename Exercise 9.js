/*Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:
*/

function toLowercaseKeys(obj) {
    const objLowerCase = {};
    let lowerCaseKey
     for(let properties in obj) {
        lowerCaseKey = properties.toLowerCase()
        objLowerCase[lowerCaseKey] = obj[properties]  
    }
    
    return objLowerCase;
};

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }