import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CommentsProvider } from './context/CommentsContext.jsx';
import { ProductsProvider } from './context/ProductsContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CommentsProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CommentsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
