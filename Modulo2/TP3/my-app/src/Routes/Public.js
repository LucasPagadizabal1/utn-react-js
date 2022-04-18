import { Routes,Route,Navigate } from "react-router-dom"
import Home from '../Pages/Home'
import Product from '../Pages/Product';

function Public() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to="/" />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<Home />} />
      </Routes>
  );
}

export default Public;
