import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar'
import About from './Component/About';
import TV from './Component/TV';
import Home from './Component/Home';
import './Component/navbar.css';
import './Component/Tv.css'
function App() {
  
  return (

    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/Home" element={<Home/>} />

        <Route path="/About" element={<About/>} />

        <Route path="/TV" element={<TV/>} />

     </Routes>
     <footer>
     <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
     </footer>

    </div>


  );

}
export default App;
