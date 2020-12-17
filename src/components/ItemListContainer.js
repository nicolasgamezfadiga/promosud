import React from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
   
    
    return(
    <>
    <ItemCount 
    initial={1}
    stock={5}
        
    />
    <p>{greeting}</p>

    </>
    )
}

export default ItemListContainer