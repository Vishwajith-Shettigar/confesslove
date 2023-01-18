import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Share from './pages/share/Share';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import Writeconfession from './pages/newconfession/Writeconfession';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Setting from './pages/setting/Setting';
export const globalinfo = createContext();
function App() {
  const BP=process.env.REACT_APP_API_KEY;

  const [user,setUser]=useState(null);
  const [shareconfes,setShareconfes]=useState(null);
  const [theme,setTheme]=useState("eight");
  const [jwtToken, setJwtToken, removeCookie] = useCookies(["userId"]);
console.log(jwtToken);

useEffect(()=>{

  const getuser=async()=>{
try{
const res=await axios.post(BP+"/auth/getuser",{id:jwtToken.userId})
setUser(res.data.username);
}
catch(e){


}
  }
getuser()
})
  return (
    <globalinfo.Provider value={{ user, setUser,shareconfes,setShareconfes,theme,setTheme,jwtToken,setJwtToken,removeCookie }}>



    <Router basename={process.env.PUBLIC_URL} >



  <div className="App">
  <Routes>
  <Route
            path="/"
            element={ 
            !jwtToken.userId?<Signin/>: <Home/>
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
            path="/user/setting"
            element={
              !jwtToken.userId?<Signin/>: <Setting/>
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
