const products = [
    {
        id: '1',
        name: 'Depilacion Definitiva',
        price: 7000,
        category: 'capacitacion',
        img:'../../../beltive prueba/img/alquiler depi.png',
        stock: 15,
        description:'Descripcion de Lefisice',
    },
    {id: '2',
    name: 'VelaSlim',
    price: 7000,
    category: 'alquiler',
    img:'../../../beltive prueba/img/VelaSlim.JPG',
    stock: 15,
    description:'Descripcion de Lefisice',
    },
    {id: '3',
        name: 'BodyUp',
        price: 7000,
        category: 'postventa',
        img:'../../../beltive prueba/img/body up.png',
        stock: 15,
        description:'Descripcion de BodyUp',
}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
    export const getProductById = (productId) => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id ===productId))
            }, 500)
        })
    }
        export const getProductByCategory = (category) => {
            return new Promise ((resolve) => {
                setTimeout(() => {
                    resolve(products.find(prod => prod.category === category))
                }, 500)
            })
}