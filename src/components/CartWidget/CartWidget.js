import "./CartWidget.css"
import  cart  from './assets/carrito_compras.png';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to="/cart" className="Cartwidge" style={{ display: totalQuantity > 0 ? "block" :" none"}}>
            <img className="CartImg" src={cart} alt="carrito de compras"/>
            { totalQuantity}
        </Link>  
            
    
    )
}

export default CartWidget;