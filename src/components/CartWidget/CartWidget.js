import cart from './assets/shopping-cart_icon-icons.com_72552.svg'
import "./CartWidget.css"
import "bootstrap/dist/css/bootstrap.min.css"


const CartWidget = () =>{
    return(
        <div>
            <img className='cart' src={cart} alt='cart-widget'/>
            0
        </div>
    )
}

export default CartWidget;