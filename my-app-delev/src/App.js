import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Favmain from './Component/Favmain';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Hoome from './Component/home/Hoome';
import Login from './Component/Login/Login';
import Signup from './Component/signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Hoome />} />
            
          
        </Routes>
      </Router>
   <Navbar/>
   <Home/>
   <Favmain/>
  

    </div>
  );
}

export default App;
