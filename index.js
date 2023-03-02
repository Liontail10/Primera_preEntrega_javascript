/*Usuario escoja uno de los productos de la pagina de merch
*/

/*Propiedades de los productos

productos
{
    nombre
    id
    precio1
    precio2
    precio3
}
*/

// creacion de clase producto

class producto {
    constructor(nombre, id, precio1, precio2, precio3) {
        this.nombre = nombre
        this.id = id
        this.precio1 = precio1
        this.precio2 = precio2
        this.precio3 = precio3
    }
};

const playeras = new producto("playeras", 1, 100, 200, 300);
const figuras = new producto("figuras", 2, 500, 1000, 800);
const accesorios = new producto("accesorios", 3, 100, 300, 500);
const tazas = new producto("tazas", 4, 50, 60, 70);

let nombreIngresado = prompt ("Ingresar nombre")
alert("El nombre ingresado es" +' '+ nombreIngresado)

function solicitarNombre (){
    let nombreIngresado = prompt ("ingresar nombre")
    alert("El nombre ingresado es:" +' '+ nombreIngresado)
}


let productoDeseado = parseInt( 
prompt ("Escoje el producto que desees comprar 1.playeras - 2.figuras - 3.accesorios - 4-tazas")
);

//Variable para saber que escoje un producto correcto

let escojeProducto = false
let infoProducto 

while (escojeProducto === false){

    if (productoDeseado === 1) {
        escojeProducto = true
        infoProducto = playeras
    } else if (productoDeseado === 2){
        escojeProducto = true
        infoProducto = figuras
    } else if (productoDeseado === 3){
        escojeProducto = true
        infoProducto = accesorios
    } else if (productoDeseado === 4){
        escojeProducto = true 
        infoProducto = tazas
    } else productoDeseado = parseInt( 
        prompt ("Escoje el numero de producto correcto!! 1.playeras - 2.figuras - 3.accesorios - 4-tazas")
        );
        

};

alert ("El producto seleccionado es:"+' '+ infoProducto.nombre);

console.log ("infoProducto", infoProducto)
    
    



