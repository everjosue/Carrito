
import CardsProductos from "./CardsProductos";
function ListDatosProductos(props) {
  let listDatosProductosRendered = props.elements.map(element => {
    return (
      <CardsProductos
        key = {element.idproducto}
        value = {element}
        fnAgregarFavoritos={props.AgregarProductosAFavoritos}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">{listDatosProductosRendered}</div>
    </div>
  );

}

export default ListDatosProductos;