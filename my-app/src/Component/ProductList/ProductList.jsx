import React, { use } from 'react';
import { getProducts } from '../../apis/product.api';

function ProductList() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [products, setProducts] = useState([]);


    useEffect(async () => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await getProducts();
                console.log(response);
                setProducts(response.products);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {products.map((product
            ) => {
                return (
                    <div key={product.id}>
                        <h1>{product.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList;