import React, { useState } from 'react';

function CardsProductos(props) {
  const cardStyle = {
    width: '18rem',
    margin: '10px' // Agregar margen para separar las tarjetas
  };

  const imageStyle = {
    width: '200px', // Ancho fijo en píxeles
    height: '150px' // Altura fija en píxeles
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  // Limitar la descripción a 20 caracteres o mostrarla completa según el estado
  const limitedDescription = showFullDescription
    ? props.descripcion
    : props.descripcion.slice(0, 20) + (props.descripcion.length > 20 ? '...' : '');

  // Función para alternar la visualización de la descripción completa
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={props.imagen} className="card-img-top" alt="..." style={imageStyle} />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">
          {limitedDescription}
          {props.descripcion.length > 20 && (
            <button
              onClick={toggleDescription}
              className="btn btn-link p-0"
              style={{ color: 'blue', cursor: 'pointer' }}
            >
              {showFullDescription ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>
        <a href="#" className="card-link">Detalles</a>
      </div>
    </div>
  );
}

export default CardsProductos;
