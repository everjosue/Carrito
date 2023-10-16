import React from 'react';

function ResultadosBusqueda({ results }) {
  return (
    <div className="container">
      <div className="row">
        {results.map((product) => (
          <div key={product.idproducto} className="col-md-4">
            <div className="card">
              <img src={product.imagen} className="card-img-top" alt={product.nombre} />
              <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">
                  {product.descripcion.length > 20
                    ? product.descripcion.substring(0, 20) + '...' // Limita la descripción a 20 caracteres
                    : product.descripcion}
                </p>
                <p className="card-text">Precio: ${product.precio}</p>
                <a href="#" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultadosBusqueda;
