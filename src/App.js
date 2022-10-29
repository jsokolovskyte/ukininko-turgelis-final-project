import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Follow from './pages/follow/Follow';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Seller from './pages/seller/Seller';
import Sellers from './pages/sellers/Sellers';
import Shop from './pages/shop/Shop';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/shop' element={ <Shop />} />
      <Route path='/product:id' element={ <Product />} />
      <Route path='/sellers' element={ <Sellers />} />
      <Route path='/sellers:id' element={ <Seller />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/follow' element={ <Follow />} />
      <Route path='/cart' element={ <Cart />} />
      <Route path='/account' element={ <Account />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
