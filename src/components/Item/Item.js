import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({id, title, imagen, price, stock }) => {
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> 
                {title} 
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info-price">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p> 
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="option">ver detalle</Link>
            </footer>
        </article>
        )
        
}
export default Item;