//Condiconal if 

let age = 30; 
if (age ==32){
    console.log("la edad es 32 años");
}

// condicional If- else 
let age = 30; 
if (age ==32){
    console.log("la edad es 32 años");
}else {
    console.log("la edad no es 32 años"); 
}


//Condicional If Else if 

let age = 16; 
if (age ==32){
    console.log("la edad es 32 años");

}else if (age<18) {
    console.log("Es menor de edad"); 
}else {
    console.log(" la edad no es 32 años");
}

//Operador ternario
let age = 32; 
const message = age ==32 ? "la edad es 32 años" : "la edad no es 32 años";
console.log(message);

//Switch
let day = 7; 
let dayName; 

switch (day) {
    case 0:
        dayName = "Lunes"; 
        break; 
    case 1:
        dayName = "Martes"; 
        break;
     case 2:
        dayName = "Miercoles"; 
        break; 
    case 3:
        dayName = "Jueves"; 
        break;
    case 4:
        dayName = "Viernes"; 
        break;
    case 5:
        dayName = "Sabado"; 
        break;
     case 6:
        dayName = "Domingo"; 
        break;
    default: 
    dayName = "Día inválido";         
}

console.log(dayName);