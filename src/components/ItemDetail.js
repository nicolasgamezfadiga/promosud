import React from "react"


const ItemDetail = ({title, description, price})=> {

   
return(
    <>

        
           <h1>{title}</h1>
           <p>description:{description}</p>
           <p>precio:{price}</p>

    </>

)

}


export default ItemDetail