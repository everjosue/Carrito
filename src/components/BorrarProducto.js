import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BorrarProducto({ producto, onConfirm, onCancel }) {
    const [productoEliminado, setProductoEliminado] = useState(false);
    const navigate = useNavigate(); // Obtener la función de navegación
  
    const confirmEliminar = () => {
      onConfirm();
      setProductoEliminado(true);
    };
  
    const volverAlInicio = () => {
      // Navegar de vuelta al componente principal (inicio)
      navigate('/');
    };
  
    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          {productoEliminado ? (
            <p>Producto eliminado con éxito</p>
          ) : (
            <p>¿Estás seguro de que deseas eliminar el producto {producto.nombre}?</p>
          )}
          <div style={styles.buttonContainer}>
            {productoEliminado ? (
              <button style={styles.confirmButton} onClick={volverAlInicio}>
                Cerrar
              </button>
            ) : (
              <button style={styles.confirmButton} onClick={confirmEliminar}>
                Sí
              </button>
            )}
            <button style={styles.cancelButton} onClick={onCancel}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    width: '50%',
    maxWidth: '500px',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    width: '40%',
    maxWidth: '150px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  cancelButton: {
    backgroundColor: '#5bc0de',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    width: '40%',
    maxWidth: '150px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default BorrarProducto;
