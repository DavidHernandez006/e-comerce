/* ==========================
   GESTIÓN DE PRODUCTOS
========================== */

class GestorProductos {
    constructor() {
        this.productos = JSON.parse(localStorage.getItem('productos')) || [];
    }

    // Crear un nuevo producto
    crearProducto(producto) {
        const nuevoProducto = {
            id: Date.now(),
            ...producto
        };

        this.productos.push(nuevoProducto);
        this.guardar();
        return nuevoProducto;
    }

    // Obtener todos los productos
    obtenerProductos() {
        return this.productos;
    }

    // Actualizar un producto
    actualizarProducto(id, datosActualizados) {
        this.productos = this.productos.map(producto => {
            if (producto.id === id) {
                return { ...producto, ...datosActualizados };
            }
            return producto;
        });
        this.guardar();
    }

    // Eliminar un producto
    eliminarProducto(id) {
        this.productos = this.productos.filter(producto => producto.id !== id);
        this.guardar();
    }

    // Guardar en localStorage
    guardar() {
        localStorage.setItem('productos', JSON.stringify(this.productos));
    }
}

// Inicializar gestor
const gestorProductos = new GestorProductos();

// Funciones de UI
documento.addEventListener('DOMContentLoaded', () => {
    const formularioPublicar = document.querySelector('.formulario-perfil');
    if (formularioPublicar) {
        formularioPublicar.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.querySelector('input[type="text"]').value;
            const categoria = document.querySelector('select').value;
            const precio = document.querySelector('input[type="number"]').value;
            const descripcion = document.querySelector('textarea').value;

            gestorProductos.crearProducto({
                nombre,
                categoria,
                precio: parseFloat(precio),
                descripcion,
                imagen: 'placeholder.jpg'  // TODO: Implementar carga de imágenes
            });

            alert('Producto publicado exitosamente');
            formularioPublicar.reset();
        });
    }
});