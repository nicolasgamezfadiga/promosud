import React from "react"

const ItemCount = ({stock, initial}) => {
    /*const initial = 1
    const stock = 5*/
    const [sumarStock, setSuma] = React.useState(initial);

    const onAdd = () => {
       if(sumarStock < stock){
        setSuma(sumarStock+1)
       }
    }    
       const onRemove = () => {
        if(sumarStock > initial){
         setSuma(sumarStock-1)
        }   
            
   }
    
    return(
    <>
    <p>Producto stock: {sumarStock}</p>
     
    <button onClick={onAdd}>+</button>
    <button onClick={onRemove}>-</button>
    </>
    )
}

export default ItemCount