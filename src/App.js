import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(({ data }) => {
      data.forEach((element) => {
        var today = new Date();
        today.setTime(today.getTime() + element.price * 60 * 100);

        element.countdownDateOrigin = today;
      });
      setStoreItem(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home items={storeItem} loading={loading} />} />
        <Route path="/detalle/:id" element={<ProductDetail />} />
        <Route path="/acerca" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
