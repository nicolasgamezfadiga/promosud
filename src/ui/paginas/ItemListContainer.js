import React , {useState,useEffect} from 'react'

import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    
    const [categoria,setCategoria] = useState([])
    
    const{id} = useParams()
   
    useEffect(()=>{
            if(id){
            fetch(`http://localhost:3000/items.json?categoryId=${id}`)
            .then(res=>res.json())
            .then(res=>setCategoria(res))
            }else{
            fetch(`http://localhost:3000/items.json`)
            .then(res=>res.json())
            .then(res=>setCategoria(res))
            }
    },[id])

    return(
    <>

    <p>Item List Container</p>
            {categoria.map(cat=>{
                return(
                    <div>
                        <h2>{cat.title}</h2>
                        <p>{cat.categoryId}</p>
                    </div>
                )
            })}

    </>
    )
}

export default ItemListContainer