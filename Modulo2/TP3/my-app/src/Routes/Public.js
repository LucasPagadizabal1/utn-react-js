import { Routes,Route,Navigate } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from "../Pages/Register";
import ProductDetail from "../Pages/ProductDetail";

function Public() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to="/" />} />
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='*' element={<Home />} />
      </Routes>
  );
}

export default Public;
