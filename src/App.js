import React, { useState } from 'react';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';
import Carrusel_Principal from './components/Carrusel_Principal';
import ListDatosProductos from "./components/ListDatosProductos";
import SearchResult from './components/SearchResult';
import Numero from './components/Numero';
import './App.css';
import dataDatosProductos from './data/DatosProductos'; // Importa tus datos de productos

function App() {

  function AgregarProductosAFavoritos(element)
  {
    console.log("Agregando a favorito");
    console.log(element);
  }
  {/*const [searchQuery, setSearchQuery] = useState(""); // Estado para almacenar la consulta de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda

  const handleSearch = () => {
    // Realiza la búsqueda y almacena los resultados en el estado searchResults
    const filteredResults = dataDatosProductos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }; */}
  const [listDatosProductos, setlistDatosProductos] = useState(dataDatosProductos); 
  return (

    
    <div className="App">
      {/*
  
      <Numero valor="5"/>

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
      */}
      <Navegacion />
      <div className="container">
        <div className="row">
          <div className="col-9">
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
            <ListDatosProductos elements={listDatosProductos}
            fnAgregarFavoritos={AgregarProductosAFavoritos}/>
          </div>
          <div className="col-3">
            <h1 className="text-center">Favoritos</h1>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
