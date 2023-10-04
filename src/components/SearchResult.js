import React from 'react';

function SearchResult({ results }) {
  return (
    <div>
      <h2>Resultados de la búsqueda:</h2>
      {results.map((product) => (
        <div key={product.idproducto} className="card">
          <img src={product.imgprincipal} className="card-img-top" alt={product.nombre} />
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">
              {product.descripcion.length > 20
                ? product.descripcion.substring(0, 20) + '...' // Limita la descripción a 20 caracteres
                : product.descripcion}
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
