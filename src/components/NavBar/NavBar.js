import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ventas</h3>
                </Link>
            <div className='Categorias'>
                <NavLink to={`/category/alquiler`}  className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>alquiler</NavLink>
                <NavLink to={`/category/capacitacion`}  className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>capacitacion</NavLink>
                <NavLink to={`/category/postventa`}  className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>postventa</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;