let num = parseInt(prompt("Ingrese un número"));

if(num % 2 === 0){
    if(num % 3 === 0){
        if(num % 5 === 0){
            if(num % 7 === 0){
                document.write("<h2>El número " + num + " es divisible por 2, 3, 5 y 7</h2>");
            } else {
                document.write("<h2>El número " + num + " es divisible por 2, 3 y 5</h2>");
            }
        } else if(num % 7 === 0){
            document.write("<h2>El número " + num + " es divisible por 2, 3 y 7</h2>");
        } else{
            document.write("<h2>El número " + num + " es divisible por 2 y 3</h2>");
        }
    } else if(num % 5 === 0){
        if(num % 7 === 0){
            document.write("<h2>El número " + num + " es divisible por 2, 5 y 7</h2>");
        } else {
            document.write("<h2>El número " + num + " es divisible por 2 y 5</h2>");
        }
    } else if(num % 7 === 0){
        document.write("<h2>El número " + num + " es divisible por 2 y 7</h2>");
    } else{
        document.write("<h2>El número " + num + " es divisible por 2</h2>");
    }
} else if (num % 3 === 0){
    if(num % 5 === 0){
        if(num % 7 === 0){
            document.write("<h2>El número " + num + " es divisible por 3, 5 y 7</h2>");
        } else {
            document.write("<h2>El número " + num + " es divisible por 3 y 5</h2>");
        }
    } else if(num % 7 === 0) {
        document.write("<h2>El número " + num + " es divisible por 3 y 7</h2>");
    } else{
        document.write("<h2>El número " + num + " es divisible por 3</h2>");
    }
} else if(num % 5 === 0){
    if(num % 7 === 0){
        document.write("<h2>El número " + num + " es divisible por 5 y 7</h2>");
    } else {
        document.write("<h2>El número " + num + " es divisible por 5</h2>");
    }
} else if(num % 7 === 0){
    document.write("<h2>El número " + num + " es divisible por 7</h2>");
} else {
    document.write("<h2>El número " + num + " no es divisible por 2, 3, 5 y 7</h2>");
}