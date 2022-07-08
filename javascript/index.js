class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        // this.categoria = categoria
        // this.genero = genero
        // this.talle = talle
        // this.molderia = molderia
        // this.tipo = tipo
        // this.estilo = estilo
        // this.codigo = codigo
    }
}

// const producto = {
//     codigo: "",
//     categoria: "",
//     tipo: "",
//     molderia: "",
//     genero: "",
//     estilo: "",
//     precio: "",
//     talle: "",
//     cantidad: ""
// }

// producto.categoria = "remera"
// console.log(producto.categoria)

class Productos{
    constructor(){
        this.lista = []
    }
    agregarProductos(producto){
        this.lista.push(producto)
    }
    mostrarListaProductos(){ //FUNCION PARA MOSTRAR LOS PRODUCTOS CREADOS CON "new Producto()"
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
            btnCarrito.value = "Agregar al carrito"
            btnCarrito.onclick = () => {
                listaCarrito.agregarProductosCarrito(producto)
                listaCarrito.carritoHtml(producto)
                console.log(listaCarrito)
            }
            //BOTON BORRAR ELEMENTO DE LA TIENDA
            const button = document.createElement('button')
            button.className = "btn btn-scheme-a";
            button.id = "btnTrash"
            button.onclick = () => {
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                      confirmButton: 'btn btn-success',
                      cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                  })
                  
                  swalWithBootstrapButtons.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                  }).then((result) => {
                    if (result.isConfirmed) {
                      swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      this.borrarProducto(producto)
                      this.borrarProductoHtml(producto)
                      console.log(listaProductos)
                    } else if (
                      /* Read more about handling dismissals below */
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                      )
                    }
                  })
            }
            elemento.append(btnCarrito)
            elemento.append(button)
            contenedor.append(elemento)
        }
    }
    mostrarProductosHtml(producto){ //FUNCION PARA MOSTRAR LOS PRODUCTOS AGREGADOS MEDIANTE UN button
        let contenedor = document.getElementById('contenedor')
        const elemento = document.createElement('div')
        elemento.className = "col-12 col-md-7 col-lg-4";
        elemento.id = producto.nombre;
        elemento.innerHTML = 
        `
            <img src="images/botre6.jpeg" alt="Imagen coleccion 2" class="img-fluid" id="colecImg">
            <p  class="mt-4">  ${producto.nombre}</p>
        `
        const btnCarrito = document.createElement('input')
        btnCarrito.className = "btn btn-scheme-a btnproduct";
        btnCarrito.id = "btnCarrito"
        btnCarrito.type = "button"
        btnCarrito.value = "Agregar al carrito"
        btnCarrito.onclick = () => {
            listaCarrito.agregarProductosCarrito(producto)
            listaCarrito.carritoHtml(producto)
            console.log(listaCarrito)
        }
        const button = document.createElement('button')
        button.className = "btn btn-scheme-a";
        button.id = "btnTrash"
        button.onclick = () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  this.borrarProducto(producto)
                  this.borrarProductoHtml(producto)
                  console.log(listaProductos)
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                  )
                }
              })
            
        }
        elemento.append(btnCarrito)
        elemento.append(button)
        contenedor.append(elemento)
    }
    borrarProducto(producto){ //FUNCION BORRAR PRODUCTOS DE LA LISTA
        this.lista = this.lista.filter((valor)=>{
            return valor.nombre !== producto.nombre
        })
    }
    borrarProductoHtml(producto){ //FUNCION BORRAR PRODUCTOS DEL CARRITO en HTML
        let elemento = document.getElementById(producto.nombre)
        elemento.remove()
    }
    
}
//CREO LA LISTA DE PRODUCTOS
const listaProductos = new Productos()
//CREO LOS PRODUCTOS
const prod1 = new Producto('Camisa', 5000)
const prod2 = new Producto('Remera', 4000)
//onst prod3 = new Producto('Billetera', 3000)
//const prod4 = new Producto('Cinturon', 2000)
//AGREGO LOS PRODUCTOS A LA LISTA
listaProductos.agregarProductos(prod1)
listaProductos.agregarProductos(prod2)
//listaProductos.agregarProductos(prod3)
//listaProductos.agregarProductos(prod4)
//MUESTRO LOS PRODUCTOS EN HTML
listaProductos.mostrarListaProductos()

//FUNCION PARA QUE EL BOTON "AGREGAR PRODUCTO" AGREGUE PRODUCTOS A LA LISTA
const btnForm = (id) => {
    let form = document.getElementById(id);
    form.addEventListener('submit', (evento)=>{
        evento.preventDefault();
        let nombre = form.children[0].value
        let precio = form.children[1].value
        let producto = new Producto(nombre, parseInt(precio))
        listaProductos.agregarProductos(producto)
        listaProductos.mostrarProductosHtml(producto)
        console.log(listaProductos)
        
        const inputNombre = document.getElementById('nombre')
        inputNombre.value = ''
        const inputPrecio = document.getElementById('precio')
        inputPrecio.value = ''
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
    carritoHtml(producto){
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
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  this.borrarProductoCarrito(producto)
                  this.borrarProductoCarritoHtml(producto)
                  console.log(listaCarrito)
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                  )
                }
              })
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

console.log(listaCarrito)

listaCarrito.length === 0 ? console.log("Hay algo en carrito") : carritovacio()

function carritovacio(){
    const carrito = document.getElementById('carrito')
    const carroVacio = document.createElement('h2')
    carroVacio.id = "carritoVacio"
    carroVacio.textContent = "Su carrito esta vacio" 
    carrito.append(carroVacio)
}

// const saveCarrito = JSON.stringify(listaCarrito);
// localStorage.setItem ("carrito", saveCarrito)
// console.log(saveCarrito)
// localStorage.clear();