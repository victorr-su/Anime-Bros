import './App.css';
import Anouncement from './Components/Navbar/Anouncement';
import Navbar from './Components/Navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Pages/Products/Products';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import "./index.css"
import Newsletter from './Components/Newsletter/Newsletter';
import GuitarShirt from './Components/Pages/ProductItems/GuitarShirt';
import ColoredShirt from './Components/Pages/ProductItems/ColoredShirt';
import Dress from './Components/Pages/ProductItems/Dress';
import Bag from './Components/Pages/ProductItems/Bag';
import Hat from './Components/Pages/ProductItems/Hat';
import Coat from './Components/Pages/ProductItems/Coat';
import ScrollToTop from './Components/ScrollToTop';
import Cart from './Components/Cart/Cart';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';

const App = () => {

    return (
        <Router>
          <div className = "app">
            <ScrollToTop/>
            <Anouncement/>
            <Navbar/>
            <div className = "pages">
    
              <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/products" element = {<Products/>}/>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
                <Route path = "/cart" element = {<Cart/>}/>
                <Route path = "/register" element = {<Register/>}/>
                <Route path = "/login" element = {<Login/>}/>
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
            <Newsletter/>
            <Footer/>
          </div>
        </Router>
    );
}

export default App;
