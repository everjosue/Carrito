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

  let BtnAgregarFavoritos = <button 
  type="button" className="btn btn-outline-primary">Agregar a Favoritos</button>;
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
        <button onClick={()=>props.fnAgregarFavoritos(props.value)}
           className='btn btn-warning'>Favorito</button>

        <a href="#" className="card-link">Detalles</a>
      </div>
    </div>
  );
}

export default CardsProductos;
