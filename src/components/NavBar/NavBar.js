import "./navBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";


    
const NavBar = () => {
    return (
        <nav className="nav" >
          <Link to="/">
            <h3>Ecommerce</h3>
          </Link> 
          <div className="categorias">
                <Link to="/category/celular" className="boton-1">Celulares</Link>
                <Link to="/category/tablet" className="boton-2">Tablets</Link>
                <Link to="/category/notebook" className="boton-3">Notebooks</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;