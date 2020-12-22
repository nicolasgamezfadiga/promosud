import React from "react"


const Item = ({info})=> {

return(
    <>
                <ul>
                {info.map((elemento,indice)=>{ 
                    return <li key={indice}>{elemento}</li>
                 })}
                 </ul>
    </>

)

}


export default Item