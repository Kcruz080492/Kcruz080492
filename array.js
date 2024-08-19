let variable = 5; 

// sintaxis de un arreglo
let  arreglo = [];

let frutas = ["uvas", "peras", "melon"];
//    indice    0        1        2

//imprimir los elementos especificos por el indice 
console.log(frutas); 
console.log(frutas [0]);
console.log (frutas[1]);
console.log(frutas[2]);

//reemplazar el elemento  por el indice
frutas[1] = "manzana";
console.log(frutas); 

//agregar un elemento al final del arreglo "frutas"
frutas[4]="piña"
console.log(frutas);

//imprimir la longitud del arreglo "frutas"
console.log(frutas.length);

//Metodos unshift, shift, pop y push

//agregar un elemento al inicio del arreglo "frutas"
frutas.unshift("fresa");
console.log(frutas);

//eliminar un elemento al inicio del arreglo "frutas"
frutas.shift();
console.log(frutas);

//agregar un elemento al final del arreglo "frutas"
frutas.push("limon", "banana");
console.log(frutas);

//eliminar un elemento al final del arreglo "frutas"
frutas.pop();
console.log(frutas);


//Ejericio: "Crear un arreglo para guardar los nombres de los dias de la semana, empezando por cero para el domingo, 
//registrar el numero del 0 al 6 y devolver el numero del dia si en este caso el numero es 4 deberia de devolver el dia jueves."

let diasSemana = ["domingo",
                  "lunes",
                  "martes",
                  "miercoles",
                  "jueves",
                  "viernes",
                  "sabado"
]; 

let numero = 7; 
if (numero>=0 && numero <=6){
    let diaCorrespondiente = diasSemana[numero];
    console.log("El dia corresponde al numero: " + numero + " y es: " + diaCorrespondiente);
 }else {
    console.log("Error: el numero ingredado debe ser entre 0 y 6"); 
 }





