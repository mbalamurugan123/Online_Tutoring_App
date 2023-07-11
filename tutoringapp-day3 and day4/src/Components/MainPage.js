import React from "react";
import {firebase} from "../config";
import './styles/MainPage.css';
import logo from "./styles/images/logo1.png"
import logo2 from "./styles/images/logo2.png"
import img1 from "./styles/images/img1.webp"
import img2 from "./styles/images/img2.jpeg"
import img3 from "./styles/images/img3.webp"
import img4 from "./styles/images/img4.webp"
import tutor1 from "./styles/images/tutor1.jpeg"
import course_img1 from "./styles/images/course_img1.png"

import { useState,useEffect } from "react";
function MainPage(){  
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


    const courses = [
      {
        title: 'Javascript',
        duration: '3h 30m',
        level: 'Beginner',
        rating: 4.5,
        subscribers: '9,300',
        imageSrc: course_img1,
        tutor: {
          name: 'Balaji',
          avatar: tutor1
        }
      },
      {
        title: 'Data Structure',
        duration: '2h 15m',
        level: 'Advance',
        rating: 4.5,
        subscribers: '7,800',
        tutor: {
          name: 'Ted Hawkins',
          avatar: 'https://i.ibb.co/kmSrg8k/avatar-13.jpg'
        }
      },
      {
        title: 'OOPs using Java',
        duration: '1h 30m',
        level: 'Beginner',
        rating: 4.5,
        subscribers: '8,245',
        tutor: {
          name: 'Juanita Bell',
          avatar: 'https://i.ibb.co/M8CCvj4/avatar-14.jpg'
        }
      },
      {
        title: 'Machine Learning',
        duration: '2h 30m',
        level: 'Intermediate',
        rating: 4.5,
        subscribers: '3,245',
        tutor: {
          name: 'Claire Robertson',
          avatar: 'https://i.ibb.co/ySnd3t9/avatar-15.jpg'
        }
      }
    ];
  


  return(
   
    <div>
      <div className="nav-part">

             <nav className="navigation">
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
           <li className="li">
             <button>Assignment</button>
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
     <div className="course-box">
      <div className="course-bar">

      <p className="course-text">
        Courses
      </p>

     </div>
     <div className="JavaScript-lesson-section">
      
      <div className="carousel-container">
        {courses.map((course, index) => (
          <div className="courses-card" key={index}>
            <div className="card-header">
              <img src={course.imageSrc} className="card-img-top" alt="Course" />
            </div>
            <div className="card-body">
              <div className="tutotrs-role">
                <p>{course.title}</p>
              </div>
              <div className="level">
                <i className="far fa-clock"></i>
                {course.duration}&nbsp;&nbsp;&nbsp;
                <i className="fad fa-signal-alt"></i>
                {course.level}
              </div>
              <div className="rating">
                <span>&#9733;&#9733;&#9733;&#9733;&#9733; {course.rating}</span>
                <p className="subscribers">({course.subscribers})</p>
              </div>
            </div>
            <div className="card-footer">
              <img src={course.tutor.avatar} className="card-footer-tutors-img" alt="Tutor" />
              <p className="tutors-name">{course.tutor.name}</p>
              <a href="#"><i className="far fa-bookmark"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}
export default MainPage