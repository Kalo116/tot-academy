import HeaderComponent from "./components/views/Header-Section/Header.component";

import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import TablePage from "./routes/TablePage";
import { CommentsProvider } from './context/CommentsContext';
import NotFound from "./routes/404/404";
import ShopPage from "./routes/ShopPage";


function App() {

  return (
    <CommentsProvider>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main >

    </CommentsProvider>
  )
}

export default App
