import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import queryToString from 'query-string';

function Busqueda() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  // Utiliza useLocation para obtener la ubicación actual
  const location = useLocation();

  useEffect(() => {
    const parsedQuery = queryToString.parse(location.search);

    if (parsedQuery.search) {
      // Si existe un parámetro "search" en la cadena de consulta, actualiza el término de búsqueda
      setSearchTerm(parsedQuery.search);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/buscarProductos?term=${searchTerm}`);
        setSearchResults(response.data);

        if (response.data.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      } catch (error) {
        console.error('Error al buscar productos:', error);
        setNoResults(false);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
      setNoResults(false);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
      <input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {noResults ? (
        <p>No se encontraron resultados.</p>
      ) : (
        <ul>
          {searchResults.map((producto) => (
            <li key={producto.idproducto}>
              <strong>{producto.nombre}</strong> - {producto.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Busqueda;
