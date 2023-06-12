import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Cart,
  Checkout,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
} from "./components";
import { CartProvider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Bienvenidos"} />}
            />
            <Route
              path="/categoria/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />"
            <Route path="*" element={<h1>404 NOT FOUD</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
