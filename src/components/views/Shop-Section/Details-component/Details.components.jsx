import { useParams } from 'react-router-dom';
import { useProducts } from '../../../../context/ProductsContext';
import { useCheckout } from '../../../../context/CheckoutContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Details() {
    const { productId } = useParams();
    const { products } = useProducts();
    const { addToCart } = useCheckout();

    const product = products.find(product => product.id === productId);

    const addToCartDetails = (product) => {
        addToCart(product.data, productId);
        toast.success('Product added to cart', {
            duration: 5000,
            position: 'bottom-right',
            style: {
                backgroundColor: '#fff',
                color: '#000000',
            },
        });
    }

    return (
        <div>
            {product && (
                <div>
                    <h1>{product.data.title}</h1>
                    <p>{product.data.description}</p>
                    <p>{product.data.price}</p>
                    <button onClick={() => addToCartDetails(product)}>Add to Cart</button>
                    <Toaster />
                </div>
            )}
        </div>
    )

}
