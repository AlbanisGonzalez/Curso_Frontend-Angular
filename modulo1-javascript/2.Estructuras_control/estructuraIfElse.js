/*
Crea una variable numero y asígnale un número entero.
2. Escribe una estructura if-else que muestre en consola si el número es positivo, negativo o cero.
*/
let num1 = 2;

if (num1 > 0) {
    console.log(`El numero es positivo`);
} else if (num1 < 0) {
    console.log(`El numero es negativo`);
} else {
    console.log(`El numero es cero`);
}
// podria ser de esta otra forma sin llaves 
if (num1 > 0)
    console.log(`El numero es positivo`);

else if (num1 < 0)
    console.log(`El numero es negativo`);

else
    console.log(`El numero es cero`);

//comprobar si el salario esta comprendido entre 28000 y 34000
let salary = 76000.0;
const MIN_SALARY = 28000;
const MAX_SALARY = 34000;
if (salary >= MIN_SALARY && salary <= MAX_SALARY) { }



