import React , {useState,useEffect} from 'react'

import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    
    const [categoria,setCategoria] = useState([])
    
    const{id} = useParams()
    
   
    useEffect(()=>{
            if(id){
            fetch(`https://5ff3bc2e16cf4f0017c1f5ed.mockapi.io/producto?categoryId=${id}`)
            .then(res=>res.json())
            .then(res=>setCategoria(res))
            console.log(categoria)
            }else{
            fetch(`https://5ff3bc2e16cf4f0017c1f5ed.mockapi.io/producto`)
            .then(res=>res.json())
            .then(res=>setCategoria(res))
            console.log(categoria)
            }
    },[id])

    return(
    <>

    <p>Item List Container</p>
            {categoria.map(cat=>{
                return(
                    <div>
                        <h2>{cat.title}</h2>
                        <p>{cat.id}</p>
                        
                    </div>
                )
            })}

    </>
    )
}

export default ItemListContainer