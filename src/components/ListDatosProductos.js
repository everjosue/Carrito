import dataDatosProductos from "../data/DatosProductos";
import CardsProductos from "./CardsProductos";
function ListDatosProductos(props) {
  let ListDatosProductos = dataDatosProductos.map(element => {
    return (
      <CardsProductos
        id={element.idproducto}
        nombre={element.nombre}
        descripcion={element.descripcion}
        precio={element.precio}
        imagen={element.imgprincipal}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">{ListDatosProductos}</div>
    </div>
  );

}

export default ListDatosProductos;