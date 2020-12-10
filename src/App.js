import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return(
      <>
          <NavBar/>
          <ItemListContainer
          greeting="Bienvenidos a Promosud, podes buscar lo que necesitas segun la categoria."
          />
      </>
  )
}

export default App
