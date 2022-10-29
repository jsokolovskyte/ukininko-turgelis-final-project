import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
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
    </Routes>
   </Router>
   </>
  );
}

export default App;
