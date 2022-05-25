import { Routes,Route,Navigate } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from "../Pages/Register";
import ProductDetail from "../Pages/ProductDetail";
import AddProduct from "../Pages/AddProduct";
import AuthContext from '../Context/AuthContext'
import EditProduct from "../Pages/EditProduct";

function Public() {
  return (
    <AuthContext.Consumer>
        {
          context=>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Navigate to="/" />} />
              
              {!context.userLogin &&
                <>
                  <Route path='/login' element={ <Login/> } />
                  <Route path='/register' element={ <Register/> } />
                </>
              }

              {context.userLogin &&
                <>
                  
                  <Route path='/product/add' element={<AddProduct/>} />
                  <Route path='/product/edit/:id' element={<EditProduct/>} />
                </>
              }
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='*' element={<Home />} />
            </Routes>
      }
      </AuthContext.Consumer>
  );
}

export default Public;
