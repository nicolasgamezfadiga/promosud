import React from 'react'
import {Route,Switch} from "react-router-dom"
import ItemListContainer from '../paginas/ItemListContainer'

const Main = () => {
    return (
        <main>

            <Switch>

                <Route path="/" exact>
                    <ItemListContainer/>
                </Route>

                <Route path="/category/:id" exact>
                    <ItemListContainer/>
                </Route>

                </Switch>

</main>
)
}

export default Main
