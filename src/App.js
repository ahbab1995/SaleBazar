
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import UploadProduct from './components/UploadProduct/UploadProduct';
import Orderlist from './components/Orderlist/Orderlist';
import Login from './components/Login/Login';
import { Container } from 'react-bootstrap/Container';
import Privetroute from './components/Privetroute/Privetroute';



function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/products" element={ <Products/> } />
        <Route path="/uploadproducts" element={ <Privetroute>
          <UploadProduct/>
        </Privetroute> } />
        <Route path="/orderlist" element={ <Privetroute>
          <Orderlist/>
        </Privetroute> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
