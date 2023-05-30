import { useEffect, useState } from "react"
import { getProductById } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams} from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/database";

const ItemDetailcontainer = () =>{
    const[product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() =>{
        const getProducto =async () => {
            const queryRef = doc(db,"products",itemId);
            const response = await
        getDoc(queryRef);
            const newItem = {
                id:response.id, ...response.data(),
            };
        
            setTimeout(() => {
                setProduct(newItem);
            }, 500)
        };
        getProducto();

        },[itemId]
        
    )    
        
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
    

};

export default ItemDetailcontainer;