import ShopCheckout from './Shop-checkout-compoent/ShopCheckout.compoent';
import './Shop.styles.css';
import ShopFilter from './Shop-filters-component/ShopFilter.components';
import ShopList from './Shop-list-compoent/ShopList.components';

export default function Shop() {
    return (
        <div className="shop-content">
            <ShopFilter />
            <ShopList />
            <ShopCheckout />
        </div>
    );
}