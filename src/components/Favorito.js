import React from 'react';

function Favorito(props) {
  const eliminarFavorito = () => {
    props.onEliminarFavorito(props.value);
  };

  const iconStyle = {
    cursor: 'pointer',
    width: '30px',
    marginLeft: '10px', // Ajusta este valor según tu preferencia
  };

  return (
    <div>
      <div className="alert alert-info p-0" role="alert">
        <img width="50px" src={props.value.imgprincipal} />
        <small>{props.value.nombre}</small>
        <img
          src="images/eliminar.png" // Reemplaza con la ruta correcta de tu imagen
          alt="Eliminar"
          onClick={eliminarFavorito}
          style={iconStyle}
        />
      </div>
    </div>
  );
}

export default Favorito;
