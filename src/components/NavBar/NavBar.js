import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {
    return(
        <nav>
            <h3 className='Alquiler'>Alquiler de Equipos</h3>
            <div className='Botones'>
                <button>Depilacion Definitiva</button>
                <button>Criolipolisis</button>
                <button>Body up</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;