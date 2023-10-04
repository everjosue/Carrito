import React from 'react';

function Saludo() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px', // Altura de la caja resaltada
    backgroundColor: '#f8f9fa', // Color de fondo de la caja
    borderRadius: '5px', // Borde redondeado
    boxShadow: '0px 0px 5px 0px #888888', // Sombra ligera
  };

  const textStyle = {
    textAlign: 'center', // Centrar el texto
  };

  return (
    <div style={containerStyle}>
      <h4 style={textStyle}>Aprovecha las mejores ofertas y descuentos únicos</h4>
    </div>
  );
}

export default Saludo;
