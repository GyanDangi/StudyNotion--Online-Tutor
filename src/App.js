import "./App.css";
import Navbar from './Components/Navbar'
import { Route,Routes } from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";
function App() {


  const [isLoggedIn, setIsLoggedIn] =useState(false);


  return (

      <div className="App w-screen  bg-richblack-900 flex flex-col text-white select-none">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
          
        </Navbar>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login setIsloggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element={<SignUp setIsloggedIn={setIsLoggedIn} />}/>
          <Route path="/dashboard" 
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard/>
            </PrivateRoute>
          }/>

        </Routes>
      </div>

  )
}

export default App;
