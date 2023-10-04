import React, { useState } from 'react';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';
import Carrusel_Principal from './components/Carrusel_Principal';
import ListDatosProductos from "./components/ListDatosProductos";
import SearchResult from './components/SearchResult';
import './App.css';

import dataDatosProductos from './data/DatosProductos'; // Importa tus datos de productos

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para almacenar la consulta de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda

  const handleSearch = () => {
    // Realiza la búsqueda y almacena los resultados en el estado searchResults
    const filteredResults = dataDatosProductos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="App">
      <Navegacion setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <Saludo />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Carrusel_Principal />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {searchQuery && <SearchResult results={searchResults} />}
      <ListDatosProductos />
    </div>
  );
}

export default App;
