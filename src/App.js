import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from "./pages/Auth/Signup";
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile'
import ProtectedRoute from './pages/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';



function App() {
  const {loggedIn} = useAuth(); 
  return (
    <Router>
      <div>
        <Navbar />

        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            {/* route with dynamic id param to match links like `/product/${item._id}` */}
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={
              <ProtectedRoute isAuthenticated={loggedIn}>
                <Profile />
              </ProtectedRoute>
            }
            />
            <Route path='/basket' element={<Basket/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path="*" element={<Error404/>} />


          </Routes>
        </div>

      </div>
    </Router>

  )

}



export default App;

