import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="titulo">Su carrito está vacío</h2>
                <Link className="link" to="/">Ver Productos</Link>
            </>

        )
    }

    return (
        <div>
            <div className="producto">
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            </div>
            
            <div className="info">
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link className="finalizar" to="/checkout">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart