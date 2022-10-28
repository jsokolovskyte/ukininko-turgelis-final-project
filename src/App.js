import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/shop' element={ <Shop />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
