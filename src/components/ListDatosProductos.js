import React, { useState, useEffect } from 'react';
import CardsProductos from './CardsProductos';
import axios from 'axios'; // Asegúrate de tener axios instalado

function ListDatosProductos(props) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener la lista de productos
    axios.get('http://localhost:5000/productos') // Reemplaza la URL con la dirección de tu API
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  // Resto del componente como lo tenías antes
  // ...

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
