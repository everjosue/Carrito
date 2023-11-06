import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import BorrarProducto from './BorrarProducto';
import ActualizarProducto from './ActualizarProducto';




function DetallesProducto() {
  const { IDproducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalActualizar, setMostrarModalActualizar] = useState(false);
  const [trigger, setTrigger] = useState(0); // Nuevo estado

  const handleShowModalActualizar = () => {
    console.log('Mostrando modal de actualización');
    setMostrarModalActualizar(true);
    
  };

  const handleCloseActualizarModal = () => {
    console.log('Cerrando modal de actualización');
    setMostrarModalActualizar(false);
    setTrigger(trigger + 1); // Cambia el valor de trigger
  };

  function handleActualizarProducto() {
    // Lógica para actualizar el producto
    // Aquí debes implementar la lógica que envía los datos del producto actualizado al servidor
    setTrigger(trigger + 1); // Cambia el valor de trigger
  }
  
  function handleCerrarActualizarModal() {
    console.log('Cerrando modal de actualización');
    setMostrarModalActualizar(false);
  }
  

  useEffect(() => {
    if (IDproducto) {
      axios
        .get(`http://localhost:5000/productos/detalles?idproducto=${IDproducto}`)
        .then((response) => {
          if (response.status === 200) {
            setProducto(response.data);
          } else {
            console.error('Error al obtener detalles del producto:', response);
          }
        })
        .catch((error) => {
          console.error('Error al obtener detalles del producto:', error);
        });
    }
  }, [IDproducto, trigger]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  const handleDelete = () => {
    console.log('Eliminando producto', IDproducto);
    axios
      .delete(`http://localhost:5000/borrarproductos/${IDproducto}`)
      .then((response) => {
        if (response.status === 200) {
          // Producto eliminado con éxito, puedes realizar alguna acción, como redirigir al usuario.
        } else {
          console.error('Error al eliminar el producto:', response);
        }
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h2>Detalles del Producto</h2>
      </div>
      <div className="botoninicio-button">
        <Link to="/" className="btn btn-primary">
          Volver al Inicio
        </Link>
        <div className="botoninicio-button">
          <button onClick={() => setMostrarModal(true)} style={{ marginRight: '10px' }}>
            Eliminar Producto
          </button>
          <button onClick={handleShowModalActualizar} style={{ marginRight: '0px' }}>
            Actualizar Producto
          </button>
        </div>
      </div>
      <div className="content-container">
        <div className="carousel-container">
          <img
            src={producto.imgprincipal}
            className="d-block mx-auto img-small"
            alt="Producto"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        </div>
        <div className="product-details">
          <h2>{producto.nombre}</h2>
          <p>
            <strong>Descripción:</strong>
            <br />
            {producto.descripcion}
          </p>
          <p>
            <strong>Precio:</strong>
            <br />
            ${producto.precio.toFixed(2)}
          </p>
          <p>
            <strong>Categoría:</strong>
            <br />
            {producto.categoria}
          </p>
          {/* Puedes mostrar más detalles del producto aquí */}
        </div>
      </div>

      {mostrarModal && (
        <BorrarProducto
          producto={producto}
          onConfirm={handleDelete}
          onCancel={() => setMostrarModal(false)}
        />
      )}

      
      {mostrarModalActualizar && (
        console.log(producto),
        <ActualizarProducto
          producto={producto}
          onConfirm={handleActualizarProducto}
          onCancel={handleCerrarActualizarModal}
        />
      )}

    </div>
  );
}

export default DetallesProducto;
