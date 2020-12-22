import React from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
   
    
    return(
    <>
    <ItemCount 
    initial={1}
    stock={5}
    />

    <ItemList/>
    <p>{greeting}</p>

    </>
    )
}

export default ItemListContainer