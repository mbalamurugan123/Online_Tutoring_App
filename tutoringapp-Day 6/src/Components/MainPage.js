import React from "react";
import {firebase} from "../config";
import './styles/MainPage.css';
import Sidenav from "./sidebar";
import Courses from "./courses";
import Footer from "./footer";
import logo from "./styles/images/logo1.png"
import logo2 from "./styles/images/logo2.png"
import img1 from "./styles/images/img1.webp"
import img2 from "./styles/images/img2.jpeg"
import img3 from "./styles/images/img3.webp"
import img4 from "./styles/images/img4.webp"

import { useState,useEffect } from "react";
function MainPage(){  
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
    
  


  return(
   
    <div>
      <div className="nav-part">

             <nav className="navigation">
              <Sidenav/>
              <img className="logo-img" src={logo}></img>
            <h1 id="title">MyEducator</h1>
        <div className="navigation-menu">
         <ul>
           <li className="li">
             <button>Home</button>
           </li>
           <li className="li">
             <button>Courses</button>
           </li>
           
           <li className="list2"><div class="dropdown">
  <button class="dropbtn"><img src={logo2} className="drop-image"></img> </button>
  <div class="dropdown-content">
    <a>My Profile</a>
    <a>Dashboard</a>
    <a onClick={()=>{firebase.auth().signOut()}}>Logout</a>
  </div>
</div>
           </li>
          
         </ul>
       </div> 
     </nav>
      </div>
     <div className="upper-part">
      <div className="slogan-text">
       
        <p className="slgo">Your successful online training journey begins here</p>
      </div>
     <div className="slideshow-container">
      <div className="mySlides fade" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
    
        <img src={img1} className="slide-img" style={{ width: '50%'  }} />
        
      </div>
      <div className="mySlides fade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>

        <img src={img2} className="slide-img" style={{ width: '50%' }}  />
        
      </div>
      <div className="mySlides fade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>

        <img src={img3} className="slide-img" style={{ width: '50%' }}  />
      </div>
      <div className="mySlides fade" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>

        <img src={img4} className="slide-img" style={{ width: '50%' }}  />
      </div>
    </div>
           
     </div>
     <Courses />
     <Footer />
    </div>
  );
}
export default MainPage