// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Karla";

if(nombre === "karla"){
    console.log("mi nombre es: " + nombre); 
    
}else{
    console.log("Tu nombre no es Karla"); 
}
    
 // 2. Valida que el usuario y contraseña concide con los establecidos
 let usuario = "admin";
 let contraseña = "admin123*";

 if(usuario === "admin" && contraseña === "admin123*"){
    console.log("Bienvendio usuario");
 }else{
    console.log("Usuario o contraseña es incorrecto");
 }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user= "admin";
let password = "admin123*";

if(user ==="admin" && password === "admin123*"){
   console.log("Bienvendio usuario");
}else{
   console.log("Usuario o contraseña es incorrecto");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 1
 if (numero >0){
    console.log("El numero es positivo"); 
} else if (numero <0){
    console.log("El numero es negativo"); 
} else {
    console.log("El numero es cero"); 
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let adulto= 14; 
 
if(adulto>=18){
    console.log("Puedes votar");
}else if (adulto<=18){
    console.log("No puedes votar porque eres menor de edad, Te faltan " + (18 - adulto) + " años para poder votar");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//dependiendo de la edad

let adulto1 =18;
let mensaje = (adulto1 >=18) ? "eres adulto" : "eres menor de edad" 
console.log (mensaje); 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Enero";
let estacion;
 if (mes === "Marzo" || mes === "Abril" || mes === "Mayo" || mes === "Junio" ){
    estacion = "primavera";
 }else if (mes === "Julio" || mes === "Agosto" || mes === "Septiembre"){
    estacion ="Verano";
 }else if (mes === "Octubre" || mes === "Noviembre"){
    estacion ="Otoño";
 }else if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero"){
    estacion = "Invierno";
 }else {
    estacion = "el mes ingresado no es valido";
 }
    
 console.log("La estacion del mes es: " + estacion);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch
let mes1 = 12;
let nameMes1; 
let numDay; 

switch(mes1){
    case 1:
        nameMes1 = "Enero";
        numDay = 31;
        break;
    case 2:
        nameMes1 = "Febrero";
        numDay = 28;
        break;
    case 3:
        nameMes1 = "Marzo";
        numDay = 31;
        break;
    case 4:
        nameMes1 = "Abril";
        numDay = 30;
        break;
    case 5:
        nameMes1 = "Mayo";
        numDay = 31;
        break;
    case 6:
        nameMes1 ="Junio";
        numDay = 30;
        break;
    case 7:
        nameMes1="Julio";
        numDay = 31;
        break;
    case 8:
        nameMes1="Agosto";
        numDay = 31;
        break;
    case 9:
        nameMes1="Septiembre";
        numDay = 30;
        break;
    case 10:
        nameMes1="Octubre";
        numDay = 31;
        break;
    case 11:
        nameMes1="Noviembre";
        numDay = 30;
        break;
    case 12:
        nameMes1="Diciembre";
        numDay = 31;
        break;
    default:
        nameMes1= "Numero de mes incorrecto";
        numDay = 0;
}
console.log("Estamos en el mes de: " + nameMes1 + " y este mes tiene: " + numDay + " de dias");

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "español";
let mensajeSaludo; 

switch(idioma){
    case "español":
        mensajeSaludo = "Hola";
        break;
    case "inglés":
        mensajeSaludo = "Hello";
        break;
    case "francés":
        mensajeSaludo = "Bonjour";
        break;
    default:
        mensajeSaludo = "Idioma no soportado";
}
console.log(mensajeSaludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes2 = "Enero";
let estacion2;

switch(mes2){
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        estacion2 = "Primavera";
        break;
    case "Julio":
    case "Agosto":
    case "Septiembre":
        estacion2 = "Verano";
        break;
    case "Octubre":
    case "Noviembre":
        estacion2 = "Otoño";
        break;
    case "Diciembre":
    case "Enero":
    case "Febrero":
        estacion2 = "Invierno";
        break;
    default:
        estacion2 = "El mes ingresado no es valido";
        break;
}

console.log("La estacion del mes es: " + estacion2);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes3 = 1
let nameMes3; 

    switch(mes3){
        case 1:
            nameMes3 = "Enero";
            numDay = 31;
            break;
        case 2:
            nameMes3 = "Febrero";
            numDay = 28;
            break;
        case 3:
            nameMes3 = "Marzo";
            numDay = 31;
            break;
        case 4:
            nameMes3 = "Abril";
            numDay = 30;
            break;
        case 5:
            nameMes3 = "Mayo";
            numDay = 31;
            break;
        case 6:
            nameMes3 ="Junio";
            numDay = 30;
            break;
        case 7:
            nameMes3="Julio";
            numDay = 31;
            break;
        case 8:
            nameMes3="Agosto";
            numDay = 31;
            break;
        case 9:
            nameMes3="Septiembre";
            numDay = 30;
            break;
        case 10:
            nameMes3="Octubre";
            numDay = 31;
            break;
        case 11:
            nameMes3="Noviembre";
            numDay = 30;
            break;
        case 12:
            nameMes3="Diciembre";
            numDay = 31;
            break;
        default:
            nameMes3= "Numero de mes incorrecto";
            numDay = 0;
    }
    console.log("Estamos en el mes de: " + nameMes3 + " y este mes tiene: " + numDay + " de dias");