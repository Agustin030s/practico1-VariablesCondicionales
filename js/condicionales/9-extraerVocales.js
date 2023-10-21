let frase = prompt("Ingresa una frase:");
let fraseMinusculas = frase.toLowerCase(); // Convertir la frase a minúsculas para considerar tanto mayúsculas como minúsculas

let resultado = "";

if(fraseMinusculas.length > 0 && 
    (fraseMinusculas.charAt(0) === "a" || fraseMinusculas.charAt(0) === "e" || fraseMinusculas.charAt(0) === "i" 
    || fraseMinusculas.charAt(0) === "o" || fraseMinusculas.charAt(0) === "u")){

        resultado += fraseMinusculas.charAt(0);

}
if(fraseMinusculas.length >= 1 && 
    (fraseMinusculas.charAt(1) === "a" || fraseMinusculas.charAt(1) === "e" || fraseMinusculas.charAt(1) === "i" 
    || fraseMinusculas.charAt(1) === "o" || fraseMinusculas.charAt(1) === "u")){

        resultado += fraseMinusculas.charAt(1);

}
if(fraseMinusculas.length >= 2 && 
    (fraseMinusculas.charAt(2) === "a" || fraseMinusculas.charAt(2) === "e" || fraseMinusculas.charAt(2) === "i" 
    || fraseMinusculas.charAt(2) === "o" || fraseMinusculas.charAt(2) === "u")){

        resultado += fraseMinusculas.charAt(2);

}
if(fraseMinusculas.length >= 3 && 
    (fraseMinusculas.charAt(3) === "a" || fraseMinusculas.charAt(3) === "e" || fraseMinusculas.charAt(3) === "i" 
    || fraseMinusculas.charAt(3) === "o" || fraseMinusculas.charAt(3) === "u")){

        resultado += fraseMinusculas.charAt(3);

}
if(fraseMinusculas.length >= 4 && 
    (fraseMinusculas.charAt(4) === "a" || fraseMinusculas.charAt(4) === "e" || fraseMinusculas.charAt(4) === "i" 
    || fraseMinusculas.charAt(4) === "o" || fraseMinusculas.charAt(4) === "u")){

        resultado += fraseMinusculas.charAt(4);

}
if(fraseMinusculas.length >= 5 && 
    (fraseMinusculas.charAt(5) === "a" || fraseMinusculas.charAt(5) === "e" || fraseMinusculas.charAt(5) === "i" 
    || fraseMinusculas.charAt(5) === "o" || fraseMinusculas.charAt(5) === "u")){

        resultado += fraseMinusculas.charAt(5);

}
if(fraseMinusculas.length >= 6 && 
    (fraseMinusculas.charAt(6) === "a" || fraseMinusculas.charAt(6) === "e" || fraseMinusculas.charAt(6) === "i" 
    || fraseMinusculas.charAt(6) === "o" || fraseMinusculas.charAt(6) === "u")){

        resultado += fraseMinusculas.charAt(6);

}
if(fraseMinusculas.length >= 7 && 
    (fraseMinusculas.charAt(7) === "a" || fraseMinusculas.charAt(7) === "e" || fraseMinusculas.charAt(7) === "i" 
    || fraseMinusculas.charAt(7) === "o" || fraseMinusculas.charAt(7) === "u")){

        resultado += fraseMinusculas.charAt(7);

}
if(fraseMinusculas.length >= 8 && 
    (fraseMinusculas.charAt(8) === "a" || fraseMinusculas.charAt(8) === "e" || fraseMinusculas.charAt(8) === "i" 
    || fraseMinusculas.charAt(8) === "o" || fraseMinusculas.charAt(8) === "u")){

        resultado += fraseMinusculas.charAt(8);

}
if(fraseMinusculas.length >= 9 && 
    (fraseMinusculas.charAt(9) === "a" || fraseMinusculas.charAt(9) === "e" || fraseMinusculas.charAt(9) === "i" 
    || fraseMinusculas.charAt(9) === "o" || fraseMinusculas.charAt(9) === "u")){

        resultado += fraseMinusculas.charAt(9);

}
if(fraseMinusculas.length >= 10 && 
    (fraseMinusculas.charAt(10) === "a" || fraseMinusculas.charAt(10) === "e" || fraseMinusculas.charAt(10) === "i" 
    || fraseMinusculas.charAt(10) === "o" || fraseMinusculas.charAt(10) === "u")){

        resultado += fraseMinusculas.charAt(10);

}

document.write("<h2>Input: " + frase + "</h2>");
document.write("<h2>Output: " + resultado + "</h2>");
