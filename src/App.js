import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import ItemDetailcontainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './components/Context/CartContext';



function App() {
return (
    <div className="App">
    <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer greeting= {'Bienvenidos a Nuestra Tienda'}/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>  
        <Route path="/Item/:itemId" element= {<ItemDetailcontainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>  
    </BrowserRouter> 
    </div>
)
}

export default App;
