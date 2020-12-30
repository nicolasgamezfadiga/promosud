import React, { useEffect } from "react"
import Item from "./Item"

const ItemList = () => {

    const [Producto,setInfo] = React.useState([])
    


    React.useEffect(()=>{
        let promesa = new Promise((resolver, rechazar) => {

            setTimeout(() => {
                resolver(true)      
            },2000)
    
        })
    
        promesa.then( resultado => {
        setInfo( [{id:1, title: "ventilador", description: "ventilador de pie", price: "900" },
        {id:2, title: "mate", description: "set de mate", price: "400"},
        {id:3, title: "tripode", description: "tripode flexible", price: "700"},
        {id:4, title: "inflable", description: "salvavidas de dona", price: "1200"}]
        )
            
        })
    })


   

    return(

        <>

             
                {Producto.map((elemento,indice)=>{ 
               
                  return <Item
                    id={elemento.id}
                    title={elemento.title}
                    description={elemento.description}
                    price={elemento.price}
                    />
                   
 
                 })}
                 
            
        </>
    )

}

export default ItemList