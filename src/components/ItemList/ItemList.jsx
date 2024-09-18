import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({camisetas}) => {
return (
    <div className="contenedorCamisetas">
        {camisetas.map(item => <Item key={item.id} {...item} />)}
    </div>
)
}

export default ItemList