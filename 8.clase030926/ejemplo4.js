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
{ nombre: "Audifonos", precio: 300 }
];

let nombre = prompt("Ingrese el nombre del producto:");

let producto = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

if (producto) {
let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
let total = producto.precio * cantidad;

alert("Producto: " + producto.nombre +
      "\nPrecio: Bs. " + producto.precio +
      "\nCantidad: " + cantidad +
      "\nTotal a pagar: Bs. " + total);


} else {
alert("El producto no existe.");
}




