import HeaderComponent from "./components/views/Header-Section/Header.component";

import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import TablePage from "./routes/TablePage";
import { CommentsProvider } from './context/CommentsContext';


function App() {

  return (
    <CommentsProvider>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </main >
    </CommentsProvider>
  )
}

export default App
