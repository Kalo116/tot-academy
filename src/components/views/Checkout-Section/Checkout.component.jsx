import React, { useState } from "react";
import { Truck, Package, PackageCheck } from "lucide-react";
// import "./Checkout1.styles.css";
import "./Checkout2.styles.css";

function ChechoutComponent() {
  const [differentBilling, setDifferentBilling] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("standard");

  const [products] = useState([
    { id: 1, name: "Example Product 1", price: 99.99, quantity: 1 },
    { id: 2, name: "Example Product 2", price: 49.99, quantity: 2 },
  ]);

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping =
    deliveryMethod === "express" ? 15 : deliveryMethod === "speedy" ? 25 : 5;
  const total = subtotal + shipping;

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-grid">
          <div>
            <div className="checkout-form-section">
              <h2 className="checkout-section-title">Customer Information</h2>
              <div className="checkout-form-group">
                <label className="checkout-label">Full Name *</label>
                <input type="text" className="checkout-input" required />
              </div>
              <div className="checkout-form-group">
                <label className="checkout-label">Email Address *</label>
                <input type="email" className="checkout-input" required />
              </div>
              <div className="checkout-form-group">
                <label className="checkout-label">Phone Number *</label>
                <input type="tel" className="checkout-input" required />
              </div>
            </div>

            <div className="checkout-form-section">
              <h2 className="checkout-section-title">Shipping Information</h2>
              <div className="checkout-form-group">
                <label className="checkout-label">Street Address *</label>
                <input type="text" className="checkout-input" required />
              </div>
              <div className="checkout-form-row">
                <div className="checkout-form-group">
                  <label className="checkout-label">City *</label>
                  <input type="text" className="checkout-input" required />
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">State *</label>
                  <input type="text" className="checkout-input" required />
                </div>
              </div>
              <div className="checkout-form-row">
                <div className="checkout-form-group">
                  <label className="checkout-label">ZIP Code *</label>
                  <input type="text" className="checkout-input" required />
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">Country *</label>
                  <input type="text" className="checkout-input" required />
                </div>
              </div>

              <div className="checkout-form-group">
                <label className="checkout-label">Delivery Method *</label>
                <div className="checkout-delivery-options">
                  <div
                    className={`checkout-delivery-option ${
                      deliveryMethod === "standard" ? "selected" : ""
                    }`}
                    onClick={() => setDeliveryMethod("standard")}
                  >
                    <Truck />
                    <h3>Standard</h3>
                    <p className="checkout-delivery-time">7 days</p>
                    <p className="checkout-delivery-price">$5.00</p>
                  </div>
                  <div
                    className={`checkout-delivery-option ${
                      deliveryMethod === "express" ? "selected" : ""
                    }`}
                    onClick={() => setDeliveryMethod("express")}
                  >
                    <Package />
                    <h3>Express</h3>
                    <p className="checkout-delivery-time">Up to 2 days</p>
                    <p className="checkout-delivery-price">$15.00</p>
                  </div>
                  <div
                    className={`checkout-delivery-option ${
                      deliveryMethod === "speedy" ? "selected" : ""
                    }`}
                    onClick={() => setDeliveryMethod("speedy")}
                  >
                    <PackageCheck />
                    <h3>Speedy</h3>
                    <p className="checkout-delivery-time">Next day</p>
                    <p className="checkout-delivery-price">$25.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout-form-section">
              <h2 className="checkout-section-title">Payment Details</h2>
              <div className="checkout-checkbox-group">
                <input
                  type="checkbox"
                  id="invoice"
                  className="checkout-checkbox"
                />
                <label htmlFor="invoice">I require an invoice</label>
              </div>
              <div className="checkout-checkbox-group">
                <input
                  type="checkbox"
                  id="different-billing"
                  className="checkout-checkbox"
                  checked={differentBilling}
                  onChange={(e) => setDifferentBilling(e.target.checked)}
                />
                <label htmlFor="different-billing">
                  Billing address is different from shipping
                </label>
              </div>

              <div
                className={`checkout-billing-section ${
                  differentBilling ? "visible" : ""
                }`}
              >
                <div className="checkout-form-group">
                  <label className="checkout-label">
                    Billing Street Address *
                  </label>
                  <input type="text" className="checkout-input" required />
                </div>
                <div className="checkout-form-row">
                  <div className="checkout-form-group">
                    <label className="checkout-label">City *</label>
                    <input type="text" className="checkout-input" required />
                  </div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">State *</label>
                    <input type="text" className="checkout-input" required />
                  </div>
                </div>
                <div className="checkout-form-row">
                  <div className="checkout-form-group">
                    <label className="checkout-label">ZIP Code *</label>
                    <input type="text" className="checkout-input" required />
                  </div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">Country *</label>
                    <input type="text" className="checkout-input" required />
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout-form-section">
              <div className="checkout-checkbox-group">
                <input
                  type="checkbox"
                  id="terms"
                  className="checkout-checkbox"
                  required
                />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="checkout-link">
                    terms and conditions
                  </a>
                </label>
              </div>
              <button className="checkout-submit-btn">
                Confirm and Place Order
              </button>
            </div>
          </div>

          <div>
            <div className="checkout-order-summary">
              <h2 className="checkout-section-title">Order Summary</h2>
              <div>
                {products.map((product) => (
                  <div key={product.id} className="checkout-product-item">
                    <div className="checkout-product-info">
                      <h3>{product.name}</h3>
                      <p className="checkout-product-quantity">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <p>{(product.price * product.quantity).toFixed(2)} BGN</p>
                  </div>
                ))}
                <div>
                  <div className="checkout-summary-row">
                    <p>Subtotal</p>
                    <p>{subtotal.toFixed(2)} BGN</p>
                  </div>
                  <div className="checkout-summary-row">
                    <p>Shipping</p>
                    <p>{shipping.toFixed(2)} BGN</p>
                  </div>
                  <div className="checkout-total-row">
                    <p>Total</p>
                    <p>{total.toFixed(2)} BGN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChechoutComponent;
