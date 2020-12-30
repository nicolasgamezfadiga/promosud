import React from "react"
import CartWidget from "../paginas/CartWidget"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return(
     
        <>  
         <NavLink to="/" exact>
                <h1>PROMOSUD</h1>
            </NavLink>
        
        <nav >
                <NavLink to="/category/1">Electro</NavLink>
                <NavLink to="/category/2">otros</NavLink>
          <CartWidget/>
    
   
      </nav>

        </>
    )
}

export default NavBar