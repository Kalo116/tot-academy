import './ShopItem.styles.css';

export default function ShopItem({ productData, productId }) {
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
                <button className="product-btn">Add to Cart</button>
            </div>

        </div>
    )
}
