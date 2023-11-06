import React, { useState } from 'react';
import axios from 'axios';

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
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '18px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
  },
  modalContent: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '800px', // Aumenta el ancho máximo
    width: '90%', // Aumenta el ancho
    maxHeight: '600px', // Aumenta la altura máxima
    height: '80%', // Aumenta la altura
    textAlign: 'center',
    overflow: 'auto' // Añade scroll si el contenido supera la altura máxima
  },
  buttonContainer: {
    marginTop: '200px',
    display: 'flex',
    flexDirection: 'row', // Asegura que los botones se muestren en filas (uno al lado del otro)
    justifyContent: 'space-between', // Separa los botones a las esquinas
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  closeButton: {
    marginTop: '150px',
    backgroundColor: '#28a745', // Cambia esto al color que prefieras
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

const getModalContentStyles = (actualizado) => ({
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  maxWidth: actualizado ? '400px' : '800px', // Reduce el ancho máximo cuando el producto se actualiza
  width: actualizado ? '60%' : '90%', // Reduce el ancho cuando el producto se actualiza
  maxHeight: actualizado ? '300px' : '600px', // Reduce la altura máxima cuando el producto se actualiza
  height: actualizado ? '40%' : '80%', // Reduce la altura cuando el producto se actualiza
  textAlign: 'center',
  overflow: 'auto' // Añade scroll si el contenido supera la altura máxima
});

function ActualizarProducto({ producto, onConfirm, onCancel }) {
  const [nombre, setNombre] = useState(producto.nombre);
  const [marca, setMarca] = useState(producto.marca);
  const [modelo, setModelo] = useState(producto.modelo);
  const [precio, setPrecio] = useState(producto.precio);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  const [imgprincipal, setImgprincipal] = useState(producto.imgprincipal);
  const [imagenes, setImagenes] = useState(producto.imagenes);

  const [actualizado, setActualizado] = useState(false);



  const confirmActualizar = () => {
    if (!producto || !producto.idproducto) {
      console.error('Producto o ID del producto no definido');
      return;
    }
  
    const productoActualizado = {
      nombre,
      marca,
      modelo,
      precio,
      descripcion,
      imgprincipal,
      imagenes,
    };
  
    // Realiza una solicitud PUT al servidor para actualizar el producto
    axios
      .put(`http://localhost:5000/actualizarProducto/${producto.idproducto}`, productoActualizado)
      .then((response) => {
        if (response.status === 200) {
          // Producto actualizado con éxito, puedes realizar alguna acción, como cerrar el modal.
          setActualizado(true);
          onConfirm();
        } else {
          console.error('Error al actualizar el producto:', response);
        }
      })
      .catch((error) => {
        console.error('Error al actualizar el producto:', error);
      });
  };

  return (
    <div style={styles.modal}>
    <div style={getModalContentStyles(actualizado)}>
      {actualizado ? (
        <>
          <p>Producto actualizado con éxito</p>
          <button style={styles.closeButton} onClick={onCancel}>
            Cerrar
          </button>
        </>
      ) : (
          <>

        <h3>Actualizar Producto</h3>
        <label style={styles.label}>Nombre</label>
        <input
        style={styles.input}
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label style={styles.label}>Marca</label>
        <input
        style={styles.input}
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <label style={styles.label}>Modelo</label>
        <input
        style={styles.input}
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <label style={styles.label}>Precio</label>
        <input
        style={styles.input}
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <label style={styles.label}>Descripción</label>
        <input
        style={styles.input}
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label style={styles.label}>Imagen Principal</label>
        <input
        style={styles.input}
          type="text"
          placeholder="Imagen Principal"
          value={imgprincipal}
          onChange={(e) => setImgprincipal(e.target.value)}
        />
        <label style={styles.label}>Imagenes</label>
        <input
        style={styles.input}
          type="text"
          placeholder="Imágenes"
          value={imagenes}
          onChange={(e) => setImagenes(e.target.value)}
        />
        <div style={styles.buttonContainer}>
        <button style={styles.confirmButton} onClick={confirmActualizar}>
                Actualizar
              </button>
              <button
                style={styles.cancelButton}
                onClick={onCancel}
              >
                Cancelar
              </button>
        </div>
        </>
        )}
      </div>
    </div>
  );
}

export default ActualizarProducto;
