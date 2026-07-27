
// ? Ejercicio 1 - Transformar productos con .map
const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 }
];

console.log("------Map------")
productos.map((producto) => {
    console.log(`Producto: ${producto.nombre} \nPrecio: $${producto.precio.toFixed(2)} `)
    producto.precio *= 0.90
    console.log(`Precio con descuento: $${producto.precio.toFixed(2)} \n----------------`)
});

//? Ejercicio 2 - Filtrar productos con .filter
const ProductosFilter = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "USB", precio: 15 }
];

const filter = ProductosFilter.filter((producto) => producto.precio > 50)
console.log("------Filtro------")
console.log(filter)

//? Ejercicio 3 - Desestructuracion
// Objeto de evento
const evento = {
  tipo: "CLICK",
  coordenadas: { x: 100, y: 200 },
  usuario: "Ana"
};

const {tipo, coordenadas, usuario} = evento
console.log("------Desestructuración------")
console.log(`Tipo: ${tipo} \nX: ${coordenadas.x} \nY: ${coordenadas.y} \nUsuario: ${usuario}`)

// ? Ejercicio 4 - Enum

enum EstadoUsuario{
    activo = "ACTIVO",
    inactivo = "INACTIVO",
    suspendido = "SUSPENDIDO"
};

const user: EstadoUsuario = EstadoUsuario.activo
console.log("------ENUM------")
console.log(`Estado del usuario: ${user}`)