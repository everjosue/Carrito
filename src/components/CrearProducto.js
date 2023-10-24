import React, { useState } from 'react';
import axios from 'axios'; 


function CrearProducto(props) {

    const [idproducto, setIdproducto] = useState('');
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imgprincipal, setImgprincipal] = useState('');
    const [imagenes, setImagenes] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nuevoProducto = {
            nombre,
            marca,
            modelo,
            precio,
            descripcion,
            imgprincipal,
            imagenes
        };

        try {
            // Realiza una solicitud POST al servidor con los datos del nuevo producto
            const response = await axios.post('http://localhost:5000/CrearProductos', nuevoProducto);

            // Maneja la respuesta del servidor, por ejemplo, redirige a otra página
            console.log('Producto creado exitosamente:', response.data);

            // Reinicia el estado del formulario si es necesario
            setNombre('');
            setMarca('');
            setModelo('');
            setPrecio('');
            setDescripcion('');
            setImgprincipal('');
            setImagenes('');
        } catch (error) {
            // Maneja errores, por ejemplo, muestra un mensaje de error
            console.error('Error al crear el producto:', error);
        }
    };

    return (
        <form className="border border-2 border-secondary p-2 rounded" onSubmit={handleSubmit}>
            <input placeholder="Nombre"
                className="form-control mb-2"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)} />
            

            <input placeholder="Marca"
                className="form-control mb-2"
                value={marca}
                onChange={(event) => setMarca(event.target.value)} />

            <input placeholder="Modelo"
                className="form-control mb-2"
                value={modelo}
                onChange={(event) => setModelo(event.target.value)} />
            
            <input placeholder="Precio" 
                className="form-control mb-2"
                value={precio}
                onChange={(event) => setPrecio(event.target.value)} />

            <input placeholder="Descripcion"
                className="form-control mb-2"
                value={descripcion}
                onChange={(event) => setDescripcion(event.target.value)} />

            <input placeholder="Imagen Principal"
                className="form-control mb-2"
                value={imgprincipal}
                onChange={(event) => setImgprincipal(event.target.value)} />

            <input placeholder="Imagenes"
                className="form-control mb-2"
                value={imagenes}
                onChange={(event) => setImagenes(event.target.value)} />
            <input type="submit" className="btn btn-primary" value="Crear Producto" />

        </form>
    );
}

export default CrearProducto;