import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import Home from './pages/home/Home';
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
      <Route path='/sellers' element={ <Sellers />} />
      <Route path='/sellers:id' element={ <Seller />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
