import React from "react"
import Item from "./Item"

const ItemList = () => {
    const [info,setInfo] = React.useState([])

    let promesa = new Promise((resolver, rechazar) => {

        setTimeout(() => {
            resolver(true)      
        },2000)

    })

    promesa.then( resultado => {
        setInfo(["id", "title", "description", "price", "pictureUrl"])
    })

   

    return(

        <>
            <Item info={info}/>

        </>
    )

}

export default ItemList