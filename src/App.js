import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
     
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>

      

     </Routes>
     <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
