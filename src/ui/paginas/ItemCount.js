import React from "react"
import {NavLink} from "react-router-dom"

const ItemCount = ({sumarStock, onRemove, onAdd,onComprar, onTerminarCompra}) => {

   
    return(
    <>
    <p>Producto stock: {sumarStock}</p>
     
    <button onClick={onAdd}>+</button>
    <button onClick={onRemove}>-</button>
    <button onClick={onComprar}>Comprar</button>  
    <div hidden id="terminar">
    <button ><NavLink to="/Cart" >Terminar Compra</NavLink></button>
    </div>
   
   
    
    </>
    )
}

export default ItemCount