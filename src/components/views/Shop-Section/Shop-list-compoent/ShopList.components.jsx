import { useProducts } from '../../../../context/ProductsContext';
import ShopItem from "./Shop-item/ShopItem.components";
import './ShopList.styles.css';

export default function ShopList() {
    const { filteredProducts } = useProducts();

    return (
        <div className="shop-list-container">
            {filteredProducts.length > 0
                ? (
                    <div className="products">
                        {filteredProducts.map((product) => (
                            <ShopItem
                                key={product.id}
                                productData={product.data}
                                productId={product.id}
                            />
                        ))}
                    </div>
                )
                : <p className="no-cards-p">No items match your filters</p>
            }
        </div>
    );
}
