import { useEffect } from "react";
import { getProducts, getProductByCategory } from "../../asynMock";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db} from "../Firebase/database";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    

    useEffect(() => {
        const collectionProducts=
      categoryId? query(collection (db,
      "products"),where("categoryId", "==", 
      categoryId)):collection(db,
      "products")
        getDocs(collectionProducts)
        .then((result)=>{
          const lista =
      result.docs.map((producto)=>{
          return{
            id:producto.id,...producto.data(),
          };
        });
        setProducts(lista)
        })
        .catch((error) => 
  console.error(error));
                
    },[categoryId]);
    console.log(products);
    return (
        <div>
          <h1>{greeting}</h1>
          <ItemList 
    products={products}/>
        </div>
    );
};
export default ItemListContainer;