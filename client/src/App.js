import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/home/Home';
import Login from './Pages/Login';
import { useEffect, useState } from "react";


const App =() =>{
  // const user = false;

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user)
  return (
    <BrowserRouter>
    <div>
      {/* <div className='blur' style={{top: '20rem',left: '5rem'}}></div>
      <div className='blur' style={{top: '5rem',right: '5rem'}}></div> */}
      <Navbar user={user}/>
     {/* <Home /> */}
     <Routes>
      <Route path="/"element= {<Home/>}/>
      <Route path="/login"element= {user ? <Navigate to="/" /> : <Login />}/>
     </Routes>
     {/* <Login /> */}
    </div>
    </BrowserRouter>
  );
};

export default App;
