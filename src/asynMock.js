const products = [
    {
        id: "1",
        name:"Iphone 12",
        price:230000,
        category:"celular",
        img:"../img/iphone-12-300x300.webp",
        stock:25,
        description:"Description de Iphone 12"

    },
    {id:"2", name:"Samsung S21", price:200000, category:"celular",
    img:"../img/Samsung-galaxy-S21-300x300.jpg", stock:16,
    description:"Description de Samsung S21"},
    {id:"3", name:"Ipad 8va generacion", price:150000, category:"tablet",
    img:"../img/ipaq8nuevo.webp", stock:10,
    description:"Description de Ipad 8va generacion"}         
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
        
    })
}

export const getProductByCategory = (categoryId) =>{
    return new Promise((resolve) =>{
        const filteredProducts = products.filter((item) => item.category === categoryId)
        setTimeout(()=>{
            resolve(filteredProducts)
        },500)
    })
}

