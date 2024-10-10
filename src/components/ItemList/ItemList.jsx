import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({Productos}) => {
return (
    <div className="contenedorProductos">
        {Productos.map(item => <Item key={item.id} {...item} /> )}
    </div>
)
}

export default ItemList