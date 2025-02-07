import { useParams } from 'react-router-dom';
import { useProducts } from '../../../../context/ProductsContext';

export default function Details() {
    const { productId } = useParams();
    const { products } = useProducts();

    const product = products.find(product => product.id === productId);
    return (
        <div>
            {product && (
                <div>
                    <h1>{product.data.title}</h1>
                    <p>{product.data.description}</p>
                    <p>{product.data.price}</p>
                </div>
            )}
        </div>
    )

}
