import React from "react"


const Item = ({id, title, description, price})=> {

   
return(
    <>

           <p>id:{id}</p>
           <p>titulo:{title}</p>
           <p>description:{description}</p>
           <p>precio:{price}</p>

        
    </>

)

}


export default Item