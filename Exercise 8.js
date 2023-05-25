/*Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). 
Por defecto, este parámetro debe de tener un valor de 3.
Ejemplo de uso de la función:
*/


function fromBytesToFormattedSizeUnits(bytes, num = 3){
   let result;

   if(bytes/ Math.pow(10,24) >=1 || bytes/ Math.pow(10,24) <=-1){
      result = bytes/Math.pow(10,24);
      return result.toPrecision(num)+"YB";
   }
   if(bytes/ Math.pow(10,21) >=1 ||bytes/ Math.pow(10,21) <=-1){
      result = bytes/Math.pow(10,21);
      return result.toPrecision(num)+"ZB";
   }
   if(bytes/ Math.pow(10,18) >=1 || bytes/ Math.pow(10,18) <=-1){
      result = bytes/Math.pow(10,18);
      return result.toPrecision(num)+"EB";
   }
   if(bytes/ Math.pow(10,15) >=1 || bytes/ Math.pow(10,15) <=-1){
      result = bytes/Math.pow(10,15);
      return result.toPrecision(num)+"PB";
   }
   if(bytes/ Math.pow(10,12) >=1 || bytes/ Math.pow(10,12) <=-1){
      result = bytes/Math.pow(10,12);
      return result.toPrecision(num)+"TB";
   }
   if(bytes/1000000000 >=1 || bytes/1000000000 <=-1){
      result = bytes/1000000000;
      return result.toPrecision(num)+"GB";
   }
   if(bytes/1000000 >=1 || bytes/1000000 <=-1){
      result = bytes/1000000;
      return result.toPrecision(num)+"MB";
   }
   if(bytes/1000  >=1 || bytes/1000 <=-1){
      result = bytes/1000;
      return result+"KB";
   }
};


const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB