import { useParams } from 'react-router-dom';
import { useProducts } from '../../../../context/ProductsContext';
import { useCheckout } from '../../../../context/CheckoutContext';
import toast, { Toaster } from 'react-hot-toast';
import ProductCarousel from '../../../Swiper/Swiper-Details-Image/SwiperDetailsImages.components';
import './Details.styles.css';

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
        <div className='details-container'>
            <ProductCarousel />
            {product && (
                <div className="product-info">
                    <h1>{product.data.title}</h1>
                    <p>The DNA Structure and Replication Kit is an interactive educational tool designed to help students visualize and understand the fundamentals of DNA. It includes detailed components to model the double helix structure, base pairing, and the process of DNA replication. Perfect for classroom demonstrations or hands-on learning, this kit makes complex genetic concepts easy to grasp</p>
                    <p className="price">{product.data.price} BGN</p>
                    <div className="product-details">
                        <span className="product-category">{product.data.cat.join(', ')}</span>
                        <span className="product-grades">Grades: {product.data.grades.join(', ')}</span>
                    </div>
                    <button
                        className="add-to-cart-btn"
                        onClick={() => addToCartDetails(product)}
                    >
                        Add
                    </button>
                    <Toaster />
                </div>
            )}
        </div>
    )
}
