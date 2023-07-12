import './styles/courses.css'

import tutor1 from "./styles/images/tutor1.jpeg"
import tutor2 from "./styles/images/tutor2.jpeg"
import tutor3 from "./styles/images/tutor3.jpeg"
import tutor4 from "./styles/images/tutor4.jpeg"
import course_img1 from "./styles/images/course_img1.png"
import course_img2 from "./styles/images/course_img2.png"
import course_img3 from "./styles/images/course_img3.png"
import course_img4 from "./styles/images/course_img4.jpeg"

function Courses(){
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
      imageSrc: course_img2,
      tutor: {
        name: 'Sam',
        avatar: tutor2
      }
    },
    {
      title: 'OOPs using Java',
      duration: '1h 30m',
      level: 'Beginner',
      rating: 4.5,
      subscribers: '8,245',
      imageSrc: course_img3,
      tutor: {
        name: 'Vijay',
        avatar: tutor3
      }
    },
    {
      title: 'Machine Learning',
      duration: '2h 30m',
      level: 'Intermediate',
      rating: 4.5,
      subscribers: '3,245',
      imageSrc: course_img4,
      tutor: {
        name: 'Arya',
        avatar: tutor4
      }
    }
  ];
  return(
    <div>

    <div className="course-box">
      <div className="course-bar">

      <p className="course-text">
        Courses
      </p>

      <div className="search-box">
        <input className="input-search-box" type="text" placeholder="Search..."></input>
        <button className="search-button">Search</button>
      </div>
     </div>
      </div>
    <div className="JavaScript-lesson-section">
        <select className='filter-box'>
          <option>Filter</option>
          <option>Subject/Category</option>
          <option>Level of Difficulty</option>
          <option>Price</option>
          <option>Duration</option>
          <option>Ratings and Reviews</option>
        </select>
      
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
            </div>
            <div className="card-footer">
              <img src={course.tutor.avatar} className="card-footer-tutors-img" alt="Tutor" />
              <p className="tutors-name">{course.tutor.name}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}
export default Courses