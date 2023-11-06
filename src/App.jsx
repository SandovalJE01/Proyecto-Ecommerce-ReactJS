import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
function App() {
    return(
        <>
           < NavBar/>
           <ItemListContainer gretting="hello world" />
        </>
    );
}

export default App;
