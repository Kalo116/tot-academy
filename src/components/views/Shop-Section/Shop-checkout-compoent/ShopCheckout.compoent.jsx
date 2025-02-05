import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import './ShopCheckout.styles.css';

const fruitBasket = [
    "🍓 Strawberry",
    "🥥 Coconut",
    "🥝 Kiwi",
    "🍇 Grape",
    "🍉 Watermelon",
    "🍍 Pineapple",
    "🍐 Pear",
    "🍑 Peach",
    "🫐 Blueberry",
    "🍊 Orange",
    "🥭 Mango",
];

export default function ShopCheckout() {
    const [items, setItems] = useState(["🍎 Apple", "🍌 Banana", "🍒 Cherry"]);
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            autoAnimate(listRef.current);
        }
    }, []);

    const remove = (item) => {
        setItems((prevItems) => {
            fruitBasket.push(item);
            return prevItems.filter((fruit) => fruit !== item);
        });
    };

    const add = () => {
        if (fruitBasket.length) {
            const newFruit = fruitBasket.shift();
            setItems((prevItems) => {
                const newItems = [...prevItems];
                newItems.splice(Math.round(Math.random() * newItems.length - 1), 0, newFruit);
                return newItems;
            });
        } else {
            alert("Out of fruit!");
        }
    };

    const randomize = () => {
        setItems((prevItems) => [...prevItems].sort(() => (Math.random() > 0.5 ? 1 : -1)));
    };

    return (
        <div className="example list-example">
            <ul ref={listRef} className="shop-checkout-list">
                {items.map((item) => (
                    <li key={item} className="shop-checkout-item">
                        <span>{item}</span>
                        <button onClick={() => remove(item)} aria-label="Remove Fruit">
                            X
                        </button>
                    </li>
                ))}
            </ul>
            <button className="button button--add button--alt" onClick={add}>+ Add Fruit</button>
            <button className="button button--random button--alt" onClick={randomize}>Randomize</button>
        </div>
    );
}
