import React, { useState } from 'react';
import dataDatosProductos from '../data/DatosProductos'; // Importa los datos de productos

const navStyle = {
  zIndex: '1000', // Ajusta el z-index a un valor alto
};

function Navegacion() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('searchTerm:', event.target.value); // Agrega este console.log
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredResults = dataDatosProductos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={navStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Carrito</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
            
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;
