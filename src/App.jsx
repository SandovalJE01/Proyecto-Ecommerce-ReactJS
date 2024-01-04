import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css"

function App() {
    return(
        // <CartProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={< Cart />} />
            <Route path="/checkout" element={< Checkout />} />
            <Route path="*" element={< Error404 />} />
        </Routes>
        </BrowserRouter>
        // </CartProvider>

    );
}

export default App;
