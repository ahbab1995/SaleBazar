
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import UploadProduct from './components/UploadProduct/UploadProduct';
import Orderlist from './components/Orderlist/Orderlist';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/products" element={ <Products/> } />
        <Route path="/uploadproducts" element={ <UploadProduct/> } />
        <Route path="/orderlist" element={ <Orderlist/> } />
      </Routes>
    </div>
  );
}

export default App;
