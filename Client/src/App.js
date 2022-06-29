import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Products from './Components/Pages/Products/Products';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import "./index.css"
import ProductItems from './Components/Pages/ProductItems/ProductItems';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import Cart from './Components/Pages/Cart/Cart';
import Pay from './Components/Pages/Payment/Pay';
import Success from './Components/Pages/Payment/Success';


const App = () => {
  const user = true;
    return (
        <Router>
          <div className = "app">
            <div className = "pages">
    
              <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/products/:category" element = {<Products/>}/>
                <Route path = "/products" element = {<Products/>}/>
                <Route path = "/product/:id" element = {<ProductItems/>}/>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
                <Route path = "/cart" element = {<Cart/>}/>
                <Route path = "/register" element = { user ? <Navigate to ="/"/> : <Register/>}/>
                <Route path = "/login" element = { user ? <Navigate to ="/"/> : <Login/>}/>
                <Route path = "/pay" element = {<Pay/>}/>
                <Route path = "/Success" element = {<Success/>}/>
              </Routes>
    
            </div>
          </div>
        </Router>
    );
}

export default App;
