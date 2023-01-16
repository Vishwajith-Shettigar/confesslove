import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Share from './pages/share/Share';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Writeconfession from './pages/newconfession/Writeconfession';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >



  <div className="App">
  <Routes>
  <Route
            path="/"
            element={
             <Signup/>
            }
          ></Route>
<Route
            path="/share"
            element={
             <Share/>
            }
          ></Route>
<Route
            path="/:username"
            element={
             <Writeconfession/>
            }
          ></Route>
  </Routes>
    </div>
  
       
    </Router>
   
  );
}

export default App;
