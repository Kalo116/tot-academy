import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import './ShopCheckout.styles.css';
import { Link } from "react-router-dom";
import { useCheckout } from "../../../../context/CheckoutContext";


export default function ShopCheckout() {
    const { cartItems, removeFromCart } = useCheckout();
    const [total, setTotal] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            autoAnimate(listRef.current);
        }
    }, []);

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        setTotal(total);
    }, [cartItems]);

    return (
        <div className="list-example">
            <ul ref={listRef} className="shop-checkout-list">
                {cartItems.map((item) => (
                    <li key={item.cartItemId} className="shop-checkout-item">
                        <span style={{ color: "black" }}>{item.title} - {item.price} BGN</span>
                        <button onClick={() => removeFromCart(item.cartItemId)} aria-label="Remove Fruit">
                            X
                        </button>

                    </li>
                ))}
            </ul>
            <div className="shop-checkout-total">
                <span>Total: {total.toFixed(2)} BGN</span>
                <Link to="/checkout" className="shop-checkout-button">Checkout</Link>
            </div>
        </div>
    );
}
