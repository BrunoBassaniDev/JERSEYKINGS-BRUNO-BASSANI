import { useState, useEffect} from 'react'
import { getCamisetas, getCamisetasPorCategorias } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [camisetas, setCamisetas] = useState([])

  const {idCategoria} = useParams()
  
  useEffect(() => {
    const funcionCamisetas = idCategoria ? getCamisetasPorCategorias : getCamisetas;

    funcionCamisetas(idCategoria)
    .then(res => setCamisetas(res))
    
}, [idCategoria])

  
  return (
    <>
    <h2>Mis Camisetas</h2>
    <ItemList camisetas={camisetas}/>
    </>
  )
}

export default ItemListContainer