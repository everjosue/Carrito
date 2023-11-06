import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import '../App.css';
import DetallesProducto from './DetallesProducto'; // Importa el componente DetallesProducto

function CardsProductos(props) {
  const cardStyle = {
    width: '18rem',
    margin: '10px'
  };

  const imageStyle = {
    width: '200px',
    height: '150px',
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  // Limitar la descripción a 20 caracteres o mostrarla completa según el estado
  const limitedDescription = showFullDescription
    ? props.value.descripcion
    : props.value.descripcion.slice(0, 20) + (props.value.descripcion.length > 20 ? '...' : '');

  // Función para alternar la visualización de la descripción completa
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={props.value.imgprincipal} className="card-img-top" alt="..." style={imageStyle} />
      <div className="card-body">
        <h5 className="card-title">{props.value.nombre}</h5>
        <p className="card-text">
          {limitedDescription}
          {props.value.descripcion.length > 20 && (
            <button
              onClick={toggleDescription}
              className="btn btn-link p-0"
              style={{ color: 'blue', cursor: 'pointer' }}
            >
              {showFullDescription ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>
        <div className="button-container">
          <Link to={`/detalle/${props.value.idproducto}`} className="card-link custom-detalles">
            Detalles
          </Link>
          
          
          <img
            src="images/favorito.png" // Reemplaza con la ruta correcta de tu imagen
            alt="Favorito"
            onClick={() => props.fnAgregarFavoritos(props.value)}
            style={{ cursor: 'pointer', width: '40px', marginLeft: '100px', marginTop: '10px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default CardsProductos;
