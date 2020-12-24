import React from "react"


const ItemDetail = ({id, title, description, price})=> {

   
return(
    <>


           <h1>{title}</h1>
           <p>{id}</p>
           <p>description:{description}</p>
           <p>precio:{price}</p>

    </>

)

}


export default ItemDetail