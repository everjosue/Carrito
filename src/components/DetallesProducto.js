import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css'; // Agrega un archivo CSS para los estilos específicos

function DetallesProducto() {
  const { IDproducto } = useParams();
  const [producto, setProducto] = useState(null);

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
  }, [IDproducto]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    
    <div className="details-container">

      <div className="details-header">
        <h2>Detalles del Producto</h2>
      </div>
      <div className="botoninicio-button">
        <a href="/" className="btn btn-primary">
          Volver al Inicio
        </a>
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
    </div>
  );
  
  
  
}

export default DetallesProducto;
