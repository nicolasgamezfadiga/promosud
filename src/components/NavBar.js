import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
     
        <div>  
           
          
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <a class="navbar-brand" href="#">Promosud</a> 
        <ul class="navbar-nav">
         <li class="nav-item active">
        <a class="nav-link" href="#">Electronica</a>
         </li>
         <li class="nav-item">
         <a class="nav-link" href="#">Libreria</a>
        </li>
        <li class="nav-item">
      <a class="nav-link" href="#">Regalos</a>
        </li>
        <li class="nav-item">
      <a class="nav-link" href="#">Ofertas</a>
    </li>
 
   
 
  </ul>
  <CartWidget/>
    
   
</nav>

        </div>
    )
}

export default NavBar