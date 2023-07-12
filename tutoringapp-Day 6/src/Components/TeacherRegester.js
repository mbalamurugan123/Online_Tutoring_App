import React, {useState} from 'react';
import './styles/TeacherRegister.css';

import {Link} from "react-router-dom";
import {firebase} from "../config";


function TeacherRegester() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [contuct,setContuct] = useState(null);
    const [qualification,setQulification] = useState(null);
    const [exp,setExp] = useState(null);
    const [age,setAge] = useState(null);
    const [feild,setFeild] = useState(null);
    const [password,setPassword] = useState(null);
    // const [confirmPassword,setConfirmPassword] = useState(null);

    // const registerUser = async (email, password) => {
    //   try {
    //     await firebase.auth().createUserWithEmailAndPassword(email, password);
    //     const currentUser = firebase.auth().currentUser;
        
    //     if (currentUser) {
    //       await currentUser.sendEmailVerification({
    //         handleCodeInApp: true,
    //         url: 'https://schoolapp-4f272.firebaseapp.com',
    //       });
          
    //       alert('Verification email sent');
  
    //       await firebase.firestore().collection('users')
    //         .doc(currentUser.uid)
    //         .set({
    //           email,
    //         });
    //     }
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // }
  
  

    return(
        // <div className="form">
        //     <div className="form-body">
        //         <div className="username">
        //             <label className="form__label" for="firstName">First Name </label>
        //             <input className="form__input" type="text" value={firstName} onChange = {(e) => setFirstName(e.target.value)} id="firstName" placeholder=""/>
        //         </div>
        //         <div className="lastname">
        //             <label className="form__label" for="lastName">Last Name </label>
        //             <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => setLastName(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="email">
        //             <label className="form__label" for="email">Email </label>
        //             <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="contuct">
        //             <label className="form__label" for="contuct">Contuct</label>
        //             <input  type="number" id="contuct" className="form__input" value={contuct} onChange = {(e) =>setContuct(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="qualification">
        //             <label className="form__label" for="qualification">Qualification </label>
        //             <input  type="text" id="qualification" className="form__input" value={qualification} onChange = {(e) => setQulification(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="exp">
        //             <label className="form__label" for="exp">Experence </label>
        //             <input  type="text" id="exp" className="form__input" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="age">
        //             <label className="form__label" for="age">Age </label>
        //             <input  type="number" id="age" className="form__input" value={age} onChange = {(e) => setAge(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="feild">
        //             <label className="form__label" for="feild">Intrested Feilds </label>
        //             <input  type="text" id="feild" className="form__input" value={feild} onChange = {(e) => setFeild(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="password">
        //             <label className="form__label" for="password">Password </label>
        //             <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder=""/>
        //         </div>
        //         <div className="confirm-password">
        //             <label className="form__label" for="confirmPassword">Confirm Password </label>
        //             <input className="form__input" type="password" id="confirmPassword"   placeholder=""/>
        //         </div>
        //     </div>
        //     <div class="footer">
        //         <button onClick={()=>registerUser(email,password)} type="submit" class="btn">Submit</button>
        //     </div>
        // </div>

        <div className="register-container">
        <div className="register-form">
          <h2>Teacher Registration</h2>
          <form className='form__body'>
            <div className="group">
              <label htmlFor="email">First Name</label>
              <input className="form__control" type="text" value={firstName} onChange = {(e) => setFirstName(e.target.value)} id="firstName" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Last Name</label>
              <input  type="text" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input  type="text" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contact</label>
              <input  type="number" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Experience</label>
              <input  type="text" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Age</label>
              <input  type="text" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Field</label>
              <input  type="text" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input  type="text" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input  type="text" id="exp" className="form-control" value={exp} onChange = {(e) => setExp(e.target.value)} placeholder=""/>
            </div>
            <button type="submit" className=" btn-primary1">Register</button>
          </form>
          
        </div>
      </div>
       
    )       
}

export default TeacherRegester