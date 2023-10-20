let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

if(num1 > num2){
    if(num1 > num3){
        document.write("<h2>El número mayor es: " + num1 + "</h2>");
    } else {
        document.write("<h2>El número mayor es: " + num3 + "</h2>");
    }
} else if(num2 > num3){
    document.write("<h2>El número mayor es: " + num2 + "</h2>");
} else{
    document.write("<h2>El número mayor es: " + num3 + "</h2>");
}