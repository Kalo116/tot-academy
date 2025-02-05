import ShopItem from "./Shop-item/ShopItem.components";
import { useState } from "react";
import './ShopList.styles.css';

export default function ShopList() {
    const [shoes, setShoes] = useState([]);
    return (
        <div className="shop-list-container">
            {

                shoes.length > 0
                    ? <div className="products">
                        {shoes.map((shoe) => {
                            return <ShopItem key={shoe.id} shoe={shoe.data} shoeId={shoe.id} />
                        })}
                    </div>
                    : <p className="no-cards-p">No cards with this name yet</p>
            }

        </div>

    )
}
