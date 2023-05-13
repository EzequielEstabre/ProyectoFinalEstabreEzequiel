import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { CartProvider } from './components/context/CartContext';

function App() {
    return (
        <div>
            <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
                    <Route path='/category/categoryId' element={<ItemListContainer greeting={'Productos por Categoria'}/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='/item/:ItemId' element={<Cart/>}/>
                    <Route path='*' element ={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
