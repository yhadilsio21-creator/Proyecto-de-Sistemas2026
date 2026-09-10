// Comparaciones
let a=5,b=10;
console.log("a=",a,"b=",b);
console.log("a==b:",a==b);
console.log("a!=b:",a!=b);
console.log("a<b:",a<b);
console.log("a>b:",a>b);
console.log("a<=b:",a<=b);
console.log("a>=b:",a>=b);

let anno=prompt("En que anno es la Independencia de Santa Cruz?")
if(anno==1825)
{ console.log("Correcto");}
else{ console.log("Incorrecto")}
//Escribir un programa que pida al usuario ingresar un numero y determinar si ese numero es par o impar
let n=parseInt(prompt("Ingrese un numero"))
if(n%2==1){
    console.log("es impar")
}
else{
 console.log("es par")
}
let a=5,b=6,c=5,d=7
console.log(a==c && b==d);

const productos={
    "monitor":100,
    "teclado":50,
    "mouse":25,
}
console.log(productos);
console.log("Cantidad de monitores:",productos["monitor"]);
/** En una tienda de computadoras los clientes pueden averiguar el precio de los productos.El dueño de la tienda quiere un programa en JavaScript que permita mostrar el total de los precio de los productos que el clientre desea comprar y el precio total a pagar .
 * el programa debe:
 * tener una lista de productos con sus precios
 * permitir al usuario ingresar el nombre de un 
 * preoducto y la cantidad que desea comprar
 * calcular el precio total a pagar y mostrar el total 
 * si el producto no existe mostrar mensaje **/
 
let productos  = [
{ nombre: "Laptop", precio: 5000 },
{ nombre: "Mouse", precio: 100 },
{ nombre: "Teclado", precio: 200 },
{ nombre: "Monitor", precio: 1500 },
{ nombre: "Audifonos", precio: 300 }];


let nombre = prompt("Ingrese el nombre del producto:");




























