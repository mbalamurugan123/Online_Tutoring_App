
import './App.css';
import StudentRegester from './Components/StudentRegester';
import TeacherRegester from './Components/TeacherRegester';
import Regester from './Components/Regester';
import Login from './Components/Login';
import {Routes,Route} from "react-router-dom";
// import { AuthProvider } from './Components/context/AuthContex';
import {firebase} from './config';
import { useState,useEffect } from 'react';
import MainPage from './Components/MainPage';
// import SignInSignUpPage from './Components/demo';
function App() {
  const [initializing,setInitializing] =useState(true);

  const [user,setUser]=useState();
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect(()=>{
    const subscriber =firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);
  if(initializing) return null;
  if(!user){
    return(
      <Routes>

      <Route path="/" element={<Login/>}></Route>
      <Route path="/Regester" element={<Regester/>}></Route>
      <Route path="/TeacherRegister" element={<TeacherRegester/>}></Route>
      <Route path="/StudentRegister" element={<StudentRegester/>}></Route>
     
      </Routes>
    );
  }
  return (
    <div className="App">

      <Routes>
      {/* <AuthProvider> */}
      <Route path='/' element={<MainPage/>}></Route>
      {/* </AuthProvider> */}

      </Routes>
    </div>
  );
}

export default App;
