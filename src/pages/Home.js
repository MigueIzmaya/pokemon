import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar.js';
import ItemListWidget from '../components/ItemListWidget/ItemListWidget.js';
import ItemDetailsContainer from "../components/ItemDetailsContainer/ItemDetailsContainer.js"
import Cart from "../components/Cart/Cart.js";


function Home() {
    return (
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path='/' element={<ItemListWidget />} />
          <Route path='/category/:idCategory' element={<ItemListWidget />} />
          <Route path='/item/:idItem' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </BrowserRouter>
    );
  }

export default Home;