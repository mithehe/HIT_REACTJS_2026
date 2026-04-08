import React, { use, useEffect, useState } from 'react'
import { getProducts } from '../../apis/product.api';


function Product() {
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect( () =>{
        const fetchProducts = async () => {
            try{
                setIsLoading(true);
                const res = await getProducts();
                console.log(res);
                setProduct(res.data);      
                setIsLoading(false);
            }catch(error){
                console.log(error);
                
            }
        }
        fetchProducts();
    },[])

    if(isLoading) {
        return <div>Loading...</div>;
    }

    if(isError) {
        return <div>Error...</div>;
    }
    if (!isLoading) {
        console.log(products)
    }

  return (
    <div>

        {products.map((products) => {
            return (
            <div key={products.id}>
                <h1>{products.name}</h1>
                <div>{products.thumbnail_url}</div>
                <p>{products.price}</p>
            </div>)
        })}
    </div>
  )
}

export default Product