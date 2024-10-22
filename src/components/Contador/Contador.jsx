import { useState } from "react"
import "./Contador"


const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }

    const restarContador = () => {
        if ( contador > inicial) {
            setContador (contador - 1)
        }
    }

return (
    <>
        <div className="contador">
            <button onClick={restarContador}> - </button>
            <strong>{contador}</strong>
            <button onClick={sumarContador}> + </button>
        </div>

        <button onClick={()=>funcionAgregar(contador)}> Agregar al carrito</button>
    </>
)
}

export default Contador