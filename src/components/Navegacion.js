import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ListDatosProductos from './ListDatosProductos.js';
import '../App.css';
import { Link } from 'react-router-dom';
import ListFavoritos from './ListFavoritos'; 
import Favorito from './Favorito';
import '../App.js';
import CrearProducto from './CrearProducto';


const navStyle = {
  zIndex: '1000',
};

function Navegacion(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [isFavoritosVisible, setIsFavoritosVisible] = useState(true); // Estado para controlar la visibilidad de favoritos
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [productoCreado, setProductoCreado] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
     console.log('Término de búsqueda:', searchTerm);
    // Redirigir a la vista de resultados con el término de búsqueda
    navigate(`/busqueda?search=${searchTerm}`);
  };

  const handleToggleFavoritos = () => {
    setIsFavoritosVisible(!isFavoritosVisible);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setProductoCreado(prevState => !prevState); // Cambia el estado de productoCreado cada vez que se cierra el modal
    props.onProductoCreado(!productoCreado); // Notifica a App.js sobre el cambio
  };

  



  useEffect(() => {
    const switchInput = document.querySelector('.form-check-input');
    const switchCircle = document.querySelector('.switch-circle');

    if (switchInput && switchCircle) {
      switchInput.addEventListener('change', function () {
        if (switchInput.checked) {
          switchCircle.style.left = 'calc(100% - 20px)';
          setIsFavoritosVisible(true); // Mostrar favoritos cuando el interruptor está activado
        } else {
          switchCircle.style.left = '0px';
          setIsFavoritosVisible(false); // Ocultar favoritos cuando el interruptor está desactivado
        }
      });
    }
  }, []);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={navStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Carrito</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
               Inicio
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

              Opciones
            </a>
            <ul className="dropdown-menu">
              <li className="d-flex align-items-center">
                <a className="dropdown-item switch-label" href="#">Mostrar Favoritos</a>
                <div className="switch-container">
                  <input type="checkbox" id="switch" className="form-check-input" onChange={props.handleToggleFavoritos}/>
                  <label htmlFor="switch" className="switch">
                    <div className="switch-circle"></div>
                  </label>
                </div>
              </li>

              <li>
                <a className="dropdown-item" href="#" onClick={handleOpenModal}>Crear Producto</a>
              </li>
              <li><hr className="dropdown-divider" /></li>
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

      {isModalVisible && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '50px',
          zIndex: '1000',
        }}>
          <div>
            <span style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
            }} onClick={handleCloseModal}>&times;</span>
            <CrearProducto isModalVisible={isModalVisible} handleCloseModal={handleCloseModal} setProductoCreado={setProductoCreado} productoCreado={productoCreado}   />
            
            
            
          </div>
          
        </div>
      )}

      
    </>

  );
}



export default Navegacion;
