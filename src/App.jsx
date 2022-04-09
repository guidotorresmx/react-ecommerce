import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Nav from './components/Nav';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
    <CartProvider>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
  
      </CartProvider>
    </>
  );
}

export default App;