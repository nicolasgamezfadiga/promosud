import React, { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({id, title, description, price})=> {
    const initial = 1
    const stock = 5

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

    const onComprar = () => {
        document.getElementById('terminar').style.display='block'
  
     }

return(
    <>

           <h1>{title}</h1>
           <p>{id}</p>
           <p>description:{description}</p>
           <p>precio:{price}</p>


           <ItemCount 
           sumarStock = {sumarStock}
           onRemove = {onRemove}
           onAdd = {onAdd}
           onComprar = {onComprar}
        
         />

    </>

)

}


export default ItemDetail