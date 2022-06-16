import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Pages/Products/Products';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import "./index.css"
import GuitarShirt from './Components/Pages/ProductItems/GuitarShirt';
import ColoredShirt from './Components/Pages/ProductItems/ColoredShirt';
import Dress from './Components/Pages/ProductItems/Dress';
import Bag from './Components/Pages/ProductItems/Bag';
import Hat from './Components/Pages/ProductItems/Hat';
import Coat from './Components/Pages/ProductItems/Coat';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import Cart from './Components/Pages/Cart/Cart';
import Pay from './Components/Pages/Payment/Pay';
import Success from './Components/Pages/Payment/Success';


const App = () => {
    return (
        <Router>
          <div className = "app">
            <div className = "pages">
    
              <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/products" element = {<Products/>}/>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
                <Route path = "/cart" element = {<Cart/>}/>
                <Route path = "/register" element = {<Register/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/Pay" element = {<Pay/>}/>
                <Route path = "/Success" element = {<Success/>}/>
              </Routes>

              <Routes>
                <Route path = "/products/GuitarShirt" element = {<GuitarShirt/>}/>
                <Route path = "/products/ColoredShirt" element = {<ColoredShirt/>}/>
                <Route path = "/products/Dress" element = {<Dress/>}/>
                <Route path = "/products/Bag" element = {<Bag/>}/>
                <Route path = "/products/Hat" element = {<Hat/>}/>
                <Route path = "/products/Coat" element = {<Coat/>}/>
              </Routes>
    
            </div>
          </div>
        </Router>
    );
}

export default App;
