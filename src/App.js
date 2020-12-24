import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {
  return(
      <>
          <NavBar/>

          <ItemDetailContainer/>
         <ItemListContainer
          greeting="Bienvenidos a Promosud, podes buscar lo que necesitas segun la categoria."
          />

         
      </>
  )
}

export default App
