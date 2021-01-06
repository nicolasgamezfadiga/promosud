import NavBar from "./NavBar";
import Main from "./Main"
import {BrowserRouter} from "react-router-dom"
import ItemDetail from "../paginas/ItemDetail";

const App = () => {
  return(
      <>

        <BrowserRouter>
          <NavBar/>

          <Main/>

          <ItemDetail/>
     
        </BrowserRouter>
         
      </>
  )
}

export default App
