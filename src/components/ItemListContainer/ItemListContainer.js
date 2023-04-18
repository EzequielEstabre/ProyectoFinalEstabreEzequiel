import "bootstrap/dist/css/bootstrap.min.css"
import {getProductByCategory, getProducts} from '../../asynMock'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react"

import {useParams} from 'react-router-dom'

const ItemListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])
    return (
        <div className="Item">
            <h1>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;