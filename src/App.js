import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Share from './pages/share/Share';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Writeconfession from './pages/newconfession/Writeconfession';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import { createContext, useState } from "react";
export const globalinfo = createContext();
function App() {

  const [user,setUser]=useState(null);
  const [shareconfes,setShareconfes]=useState(null);
  const [theme,setTheme]=useState("eight");
  return (
    <globalinfo.Provider value={{ user, setUser,shareconfes,setShareconfes,theme,setTheme }}>



    <Router basename={process.env.PUBLIC_URL} >



  <div className="App">
  <Routes>
  <Route
            path="/"
            element={
             <Home/>
            }
          ></Route>
<Route
            path="/share"
            element={
             <Share/>
            }
          ></Route>
          <Route
            path="/signup"
            element={
             <Signup/>
            }
          ></Route>

<Route
            path="/signin"
            element={
             <Signin/>
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
    </globalinfo.Provider>
   
  );
}

export default App;
