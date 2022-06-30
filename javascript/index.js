class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        //this.tipo = tipo
        //this.codigo = codigo
        this.precio = precio
    }
}

class Productos{
    constructor(){
        this.lista = []
    }
    agregarProductos(producto){
        this.lista.push(producto)
    }
    mostrarListaProductos(){
        let contenedor = document.getElementById('contenedor')
        for (let index = 0; index < this.lista.length; index++) {
            const producto = this.lista[index];
            const elemento = document.createElement('div')
            elemento.className = "col-12 col-md-7 col-lg-4";
            elemento.id = producto.nombre;
            elemento.innerHTML = 
            `
                <img src="images/botre6.jpeg" alt="Imagen coleccion 2" class="img-fluid" id="colecImg">
                <p  class="mt-4">${producto.nombre}</p>
            `
            //BOTON AGREGAR AL CARRITO
            const btnCarrito = document.createElement('input')
            btnCarrito.className = "btn btn-scheme-a btnproduct";
            btnCarrito.id = "btnCarrito"
            btnCarrito.type = "button"
            btnCarrito.textContent = "Agregar al carrito"
            btnCarrito.onclick = () => {
                listaCarrito.agregarProductosCarrito(producto)
                listaCarrito.listaProductosHtml(producto)
                console.log(listaCarrito)
            }
            //BOTON BORRAR ELEMENTO DE LA TIENDA
            const button = document.createElement('button')
            button.className = "btn btn-scheme-a";
            button.id = "btnTrash"
            button.onclick = () => {
                this.borrarProducto(producto)
                this.borrarProductoHtml(producto)
                console.log(listaProductos)
            }
            elemento.append(btnCarrito)
            elemento.append(button)
            contenedor.append(elemento)
        }
    }
    listaInicialHtml(producto){
        let contenedor = document.getElementById('contenedor')
        const elemento = document.createElement('div')
        elemento.className = "col-12 col-md-7 col-lg-4";
        elemento.id = producto.nombre;
        elemento.innerHTML = 
        `
            <img src="images/botre6.jpeg" alt="Imagen coleccion 2" class="img-fluid" id="colecImg">
            <p  class="mt-4">  ${producto.nombre}</p>
        `
        const btnCarrito = document.createElement('button')
        btnCarrito.className = "btn btn-scheme-a btnproduct";
        btnCarrito.id = "btnCarrito"
        btnCarrito.textContent = "Agregar al carrito"
        const button = document.createElement('button')
        button.className = "btn btn-scheme-a";
        button.id = "btnTrash"
        button.onclick = () => {
            this.borrarProducto(producto)
            this.borrarProductoHtml(producto)
            console.log(listaProductos)
        }
        elemento.append(btnCarrito)
        elemento.append(button)
        contenedor.append(elemento)
    }
    borrarProducto(producto){
        this.lista = this.lista.filter((valor)=>{
            return valor.nombre !== producto.nombre
        })
    }
    borrarProductoHtml(producto){
        let elemento = document.getElementById(producto.nombre)
        elemento.remove()
    }
}
//CREO LA LISTA DE PRODUCTOS
const listaProductos = new Productos()
//CREO LOS PRODUCTOS
const prod1 = new Producto('Camisa', 5000)
const prod2 = new Producto('Remera', 4000)
const prod3 = new Producto('Billetera', 3000)
const prod4 = new Producto('Cinturon', 2000)
//AGREGO LOS PRODUCTOS A LA LISTA
listaProductos.agregarProductos(prod1)
listaProductos.agregarProductos(prod2)
listaProductos.agregarProductos(prod3)
listaProductos.agregarProductos(prod4)
//MUESTRO LOS PRODUCTOS EN HTML
listaProductos.mostrarListaProductos()

const btnForm = (id) => {
    let form = document.getElementById(id);
    form.addEventListener('submit', (evento)=>{
        evento.preventDefault();
        let nombre = form.children[0].value
        let precio = form.children[1].value
        let producto = new Producto(nombre, parseInt(precio))
        listaProductos.agregarProductos(producto)
        listaProductos.listaInicialHtml(producto)
        console.log(listaProductos)
    })
}
btnForm('addProduct')

class Carrito{
    constructor(){
        this.listaCarrito = []
    }
    agregarProductosCarrito(producto){
        this.listaCarrito.push(producto);
    }
    // mostrarProductosCarrito(){
    //     let carrito = document.getElementById('carrito')
    //     for (let index = 0; index < this.listaCarrito.length; index++) {
    //         const producto = this.listaCarrito[index];
    //         const elemento = document.createElement('div')
    //         elemento.className = "col-12 col-md-7 col-lg-4";
    //         elemento.id = producto.nombre;
    //         elemento.innerHTML = 
    //         `   
    //             <img src="images/botre6.jpeg" alt="Imagen coleccion 2" class="img-fluid" id="colecImg">
    //             <p  class="mt-4">  ${producto.nombre} - $${producto.precio}  </p>
    //         `
    //         const btnTrash = document.createElement('button')
    //         btnTrash.className = "btn btn-scheme-a";
    //         btnTrash.id = "btnTrashCarrito"
    //         btnTrash.onclick = () => {
    //             this.borrarProductoCarrito(producto)
    //             this.borrarProductoCarritoHtml(producto)
    //             console.log(listaCarrito)
    //         }
    //         elemento.append(btnTrash)
    //         carrito.append(elemento)
    //     }
    // }
    listaProductosHtml(producto){
        let contenedor = document.getElementById('carrito')
        const elemento = document.createElement('div')
        elemento.className = "col-12 col-md-7 col-lg-4";
        elemento.id = producto.precio;
        elemento.innerHTML = 
        `
            <img src="images/botre6.jpeg" alt="Imagen coleccion 2" class="img-fluid" id="colecImg">
            <p  class="mt-4">  ${producto.nombre} - $${producto.precio}  </p>
        `
        const btnTrash = document.createElement('button')
        btnTrash.className = "btn btn-scheme-a";
        btnTrash.id = "btnTrashCarrito"
        btnTrash.onclick = () => {
            this.borrarProductoCarrito(producto)
            this.borrarProductoCarritoHtml(producto)
            console.log(listaCarrito)
        }
        elemento.append(btnTrash)
        contenedor.append(elemento)
    }
    borrarProductoCarrito(producto){
        this.listaCarrito = this.listaCarrito.filter((valor)=>{
            return valor.precio !== producto.precio
        })
    }
    borrarProductoCarritoHtml(producto){
        let elemento = document.getElementById(producto.precio)
        elemento.remove()
    }
}

const listaCarrito = new Carrito()

// const saveCarrito = JSON.stringify(listaCarrito);
// localStorage.setItem ("carrito", saveCarrito)
// console.log(saveCarrito)
// localStorage.clear();