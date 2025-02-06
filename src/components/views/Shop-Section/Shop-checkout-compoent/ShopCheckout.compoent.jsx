import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import './ShopCheckout.styles.css';
import { Link } from "react-router-dom";

const shopBasketItems = [
    { name: "🍓Strawberry", price: 2.99 },
    { name: "🥥Coconut", price: 4.99 },
    { name: "🥝Kiwi", price: 3.49 },
    { name: "🍇Grape", price: 5.99 },
    { name: "🍉Watermelon", price: 8.99 }
];

export default function ShopCheckout() {
    const [items, setItems] = useState(shopBasketItems);
    const [total, setTotal] = useState(0);
    const listRef = useRef(null);


    useEffect(() => {
        if (listRef.current) {
            autoAnimate(listRef.current);
        }
    }, []);

    const remove = (item) => {
        setItems((prevItems) => {
            shopBasketItems.push(item);
            return prevItems.filter((fruit) => fruit !== item);
        });

    };

    return (
        <div className="list-example">
            <ul ref={listRef} className="shop-checkout-list">
                {items.map((item) => (
                    <li key={item} className="shop-checkout-item">
                        <span style={{ color: "black" }}>{item.name} - ${item.price}</span>
                        <button onClick={() => remove(item)} aria-label="Remove Fruit">
                            X
                        </button>

                    </li>
                ))}
            </ul>
            <div className="shop-checkout-total">
                <span>Total: ${total}</span>
                <Link to="/checkout" className="shop-checkout-button">Checkout</Link>
            </div>
        </div>


    );
}
