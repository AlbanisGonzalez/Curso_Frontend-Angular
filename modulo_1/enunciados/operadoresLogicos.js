/*
1. Crea tres variables booleanas condicion1, condicion2 y condicion3 con diferentes valores.
2. Utiliza operadores lógicos (&&, ||, !) para combinar las condiciones y muestra los resultados en
consola.
*/
let condicion1 = true
let condicion2 = true
let condicion3 = false
if (condicion1===condicion2 && condicion2!==condicion3){
     console.log(`La condicion1 es igual a condicion2 y condicion2 es diferente de condicion3`)
}
if (condicion1!== condicion3 || condicion2=== condicion1){
    console.log(`La condicion1 es diferente que la condicion3 O la condicion2 es igual a la condicion1`)
}
