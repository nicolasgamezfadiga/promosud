import React from "react"

const NavBar = () => {
    return(
        
        <div>  
         <h1>Promosud</h1>    
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <ul class="navbar-nav">
         <li class="nav-item active">
        <a class="nav-link" href="#">Electronica</a>
         </li>
         <li class="nav-item">
         <a class="nav-link" href="#">Libreria</a>
        </li>
        <li class="nav-item col-lg">
      <a class="nav-link" href="#">Regalos</a>
        </li>
        <li class="nav-item">
      <a class="nav-link" href="#">Ofertas</a>
    </li>
  </ul>
</nav>
        </div>
    )
}

export default NavBar