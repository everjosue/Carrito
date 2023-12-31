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
import DetallesProducto from './components/DetallesProducto';
import { SearchProvider } from './SearchContext';



export const Context = React.createContext();

function App() {
  const [listDatosProductos, setlistDatosProductos] = useState(dataDatosProductos);
  const [listDatosProductosFavoritos, setlistDatosProductosFavoritos] = useState([]);

  const handleProductoCreado = (valor) => {
    setProductoCreado(valor);
  };

  const [favoritosVisible, setFavoritosVisible] = useState(false);

    // Estado para controlar la visibilidad del modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productoCreado, setProductoCreado] = useState(false);
    

    // Funciones para abrir y cerrar el modal
    const handleOpenModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setIsModalVisible(false);
      setProductoCreado(true);
    };

  const handleToggleFavoritos = () => {
    setFavoritosVisible(!favoritosVisible);
  };

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
        <Navegacion
          handleToggleFavoritos={handleToggleFavoritos}
          favoritosVisible={favoritosVisible}
          listDatosProductosFavoritos={listDatosProductosFavoritos}
          eliminarFavorito={eliminarFavorito}
          handleOpenModal={handleOpenModal} // Pasar la función para abrir el modal
          onProductoCreado={handleProductoCreado}
        />

        
      <br />
      <br />
      <br />
      <br />
        <div className="container">
          <div className="row">
            <div className={favoritosVisible ? "col-md-9" : "col-md-12"}>
              <SearchProvider>

                <Routes>
                  <Route path="/busqueda" element={<Busqueda AgregarProductosAFavoritos={AgregarProductosAFavoritos} />} />

                  <Route path="/detalle/:IDproducto" element={<DetallesProducto />} />
                  


                  <Route path="/" element={<React.Fragment>
                    
                    <Saludo />
                    <br />
                    <br />
                    <Carrusel_Principal />
                    <br />
                    <br />
                    <ListDatosProductos
                      elements={listDatosProductos}
                      fnAgregarFavoritos={AgregarProductosAFavoritos}
                      favoritosVisible={favoritosVisible}
                      productoCreado={productoCreado}
                    />
                  </React.Fragment>} />
                </Routes>
              </SearchProvider>
            </div>
            <div className="col-md-3">
              <br />
              <br />
              <br />
              {favoritosVisible && <ListFavoritos elements={listDatosProductosFavoritos} onEliminarFavorito={eliminarFavorito} />}
            </div>
          </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
