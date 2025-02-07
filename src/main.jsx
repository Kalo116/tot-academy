import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CommentsProvider } from './context/CommentsContext.jsx';
import { ProductsProvider } from './context/ProductsContext.jsx';
import { CheckoutProvider } from './context/CheckoutContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CommentsProvider>
        <ProductsProvider>
          <CheckoutProvider>
            <App />
          </CheckoutProvider>
        </ProductsProvider>
      </CommentsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
