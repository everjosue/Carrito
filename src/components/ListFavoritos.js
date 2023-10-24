import React from 'react';
import Favorito from './Favorito';
 // Importa un archivo de CSS para los estilos
import '../App.css';

function ListFavoritos(props) {
  const eliminarFavorito = (element) => {
    props.onEliminarFavorito(element);
  };

  const listaFavoritosRendered = props.elements.map((element) => {
    return (
      <div key={element.idproducto} className="favorito-item">
        <Favorito value={element} onEliminarFavorito={eliminarFavorito} />
      </div>
    );
  });

  return (
    <div className="list-favoritos-container">
      <h4>Favoritos</h4>
      {listaFavoritosRendered}
    </div>
  );
}

export default ListFavoritos;
