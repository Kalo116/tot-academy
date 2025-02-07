import { Link } from 'react-router-dom';
import './ShopItem.styles.css';
import { useCheckout } from '../../../../../context/CheckoutContext';

export default function ShopItem({ productData, productId }) {
    const { addToCart } = useCheckout();

    return (
        <div className="product">
            <img src={productData.imageUrl} alt={productData.title} />
            <h3 className="product-name">{productData.title}</h3>
            <p className="product-description">{productData.description}</p>
            <div className="product-details">

                <span className="product-category">{productData.cat.join(', ')}</span>
                <span className="product-grades">Grades: {productData.grades.join(', ')}</span>
            </div>
            <div className="product-price-section">
                <span className="product-price">${productData.price}</span>
                <button className="product-btn" onClick={() => addToCart(productData, productId)}>Add</button>
                <button className="product-btn">
                    <Link to={`/shop/details/${productId}`}>Details</Link>
                </button>
            </div>
        </div>
    );
}
