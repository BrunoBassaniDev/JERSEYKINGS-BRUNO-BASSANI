import React from 'react'
import "./ItemDetail.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, img, stock}) => {

return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>

    </div>
)
}

export default ItemDetail