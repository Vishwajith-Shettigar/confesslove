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
import Createlove from './pages/CreateLove/Createlove';
export const globalinfo = createContext();
function App() {
  const BP=process.env.REACT_APP_API_KEY;

  const [user,setUser]=useState("");
  const [shareconfes,setShareconfes]=useState(null);
  const [theme,setTheme]=useState("eight");
  const [jwtToken, setJwtToken, removeCookie] = useCookies(["confessloveSession"]);
console.log(jwtToken);

useEffect(()=>{

  const getuser=async()=>{
try{
const res=await axios.post(BP+"/auth/getuser",{id:jwtToken.confessloveSession})
setUser(res.data.username);
}
catch(e){


}
  }
getuser()
},[jwtToken.confessloveSession])
  return (
    <globalinfo.Provider value={{ user, setUser,shareconfes,setShareconfes,theme,setTheme,jwtToken,setJwtToken,removeCookie }}>



    <Router basename={process.env.PUBLIC_URL} >



  <div className="App">
  <Routes>
  <Route
            path="/"
            element={ 
            !jwtToken.confessloveSession?<Signin/>: <Home/>
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
              !jwtToken.confessloveSession?<Signin/>: <Setting/>
            }
          ></Route>
<Route
            path="/:username"
            element={
             <Writeconfession/>
            }
          ></Route>

{/* <Route
            path="/confesslove"
            element={
             <Createlove/>
            }
          ></Route> */}
  </Routes>
    </div>
  
       
    </Router>
    </globalinfo.Provider>
   
  );
}

export default App;
