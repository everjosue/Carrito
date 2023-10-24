import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';
import Carrusel_Principal from './components/Carrusel_Principal';
import ListDatosProductos from './components/ListDatosProductos';
import ListFavoritos from './components/ListFavoritos';
import './App.css';
import dataDatosProductos from './data/DatosProductos';
import CrearProducto from './components/CrearProducto';
import Busqueda from './components/Busqueda';
import { SearchProvider } from './SearchContext'; // Importa el SearchProvider desde el archivo correcto

function App() {
  const [listDatosProductos, setlistDatosProductos] = useState(dataDatosProductos);
  const [listDatosProductosFavoritos, setlistDatosProductosFavoritos] = useState([]);

  function AgregarProductosAFavoritos(element) {
    console.log('Agregando a favorito');
    console.log(element);

    const isDuplicated = listDatosProductosFavoritos.some(
      (fav) => fav.idproducto === element.idproducto
    );

    if (!isDuplicated) {
      let tempListProductos = [...listDatosProductosFavoritos];
      tempListProductos.push(element);
      setlistDatosProductosFavoritos(tempListProductos);
    } else {
      console.log('El elemento ya está en la lista de favoritos');
    }
  }

  const eliminarFavorito = (element) => {
    const updatedFavoritos = listDatosProductosFavoritos.filter(
      (item) => item.idproducto !== element.idproducto
    );
    setlistDatosProductosFavoritos(updatedFavoritos);
  };

  return (
    <Router>
      <div className="App">
        <Navegacion />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <SearchProvider> {/* Agrega el SearchProvider aquí */}
                <Routes>
                  <Route path="/busqueda" element={<Busqueda />} />
                  <Route path="/" element={<React.Fragment>
                    <Saludo />
                    <Carrusel_Principal />
                    <ListDatosProductos
                      elements={listDatosProductos}
                      fnAgregarFavoritos={AgregarProductosAFavoritos}
                    />
                  </React.Fragment>} />
                </Routes>
              </SearchProvider>
            </div>
            <div className="col-md-3">
              <CrearProducto />
              <ListFavoritos
                elements={listDatosProductosFavoritos}
                onEliminarFavorito={eliminarFavorito}
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
