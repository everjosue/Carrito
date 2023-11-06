import React, { useState } from 'react';
import axios from 'axios'; 


function CrearProducto(props) {



    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '50px',
        zIndex: '1000',
        width: '80%',
        height: '80%',
        overflow: 'auto',
    };

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: '1000',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    };

    const [idproducto, setIdproducto] = useState('');
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imgprincipal, setImgprincipal] = useState('');
    const [imagenes, setImagenes] = useState('');

    const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

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
            handleCloseModal();
        } catch (error) {
            // Maneja errores, por ejemplo, muestra un mensaje de error
            console.error('Error al crear el producto:', error);
        }
    };

    return (
        <>
        <button onClick={handleOpenModal}>Crear Producto</button>

        {isModalVisible && (
            <div style={overlayStyle}>
                <div style={modalStyle}>
                    <span style={closeButtonStyle} onClick={handleCloseModal}>&times;</span>
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

        </div>
    </div>
        )}
        </>
    );
}

export default CrearProducto;