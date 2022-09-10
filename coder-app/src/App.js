import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
