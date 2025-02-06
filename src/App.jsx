import HeaderComponent from "./components/views/Header-Section/Header.component";

import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import TablePage from "./routes/TablePage";
import { CommentsProvider } from './context/CommentsContext';
import NotFound from "./components/views/404/404";
import ShopPage from "./routes/ShopPage";
import Checkout from "./components/views/Checkout-Section/Checkout.component";

function App() {

  return (
    <CommentsProvider>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main >


    </CommentsProvider>
  )
}

export default App
