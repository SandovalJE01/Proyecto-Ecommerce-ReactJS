import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css"

function App() {
    return(
        <>
           < NavBar/>
           <ItemListContainer gretting="BIENVENIDOS" />
        </>
    );
}

export default App;
