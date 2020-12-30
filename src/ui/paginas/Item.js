import React from "react"


const Item = ({id, title, description, price})=> {

   
return(
    <>
         <ul>
           <li>id:{id}</li>
           <li>titulo:{title}</li>
           <li>description:{description}</li>
           <li>precio:{price}</li>
           </ul>
    </>

)

}


export default Item