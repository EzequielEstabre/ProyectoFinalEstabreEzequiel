import "bootstrap/dist/css/bootstrap.min.css"
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../services/firebaseConfig"

const ItemListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef)
        .then(Response => {
            const productsAdapted = Response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
}
    )
    return (
        <div className="Item">
            <h1>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;