import React, { useState, useEffect } from 'react';
import CardsProductos from './CardsProductos';
import axios from 'axios';

function ListDatosProductos(props) {
  const [productos, setProductos] = useState([]);

  

  useEffect(() => {
    console.log('Valor de props.productoCreado:', props.productoCreado);
    if (props.resultadosBusqueda) {
      // Si se pasan resultados de búsqueda, usa esos resultados en lugar de cargar desde la API
      setProductos(props.resultadosBusqueda);
    } else {
      // Realiza una solicitud GET a tu API para obtener la lista de productos
      axios.get('http://localhost:5000/productos') // Reemplaza la URL con la dirección de tu API
        .then(response => {
          setProductos(response.data);
        })
        .catch(error => {
          console.error('Error al obtener productos:', error);
        });
    }
  }, [props.resultadosBusqueda, props.productoCreado]);

  return (
    <div className="container">
      <div className="row">
        {productos.map(producto => (
          <CardsProductos
            key={producto.idproducto}
            value={producto}
            fnAgregarFavoritos={props.fnAgregarFavoritos}
          />
        ))}
      </div>
    </div>
  );
}

export default ListDatosProductos;
