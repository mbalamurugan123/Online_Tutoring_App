import React, { useState } from 'react';
import './styles/StudentRegister.css';
import { firebase } from '../config';
import { Link } from "react-router-dom";

function StudentRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contuct, setContuct] = useState('');
  const [collegename, setCollegename] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');
  const [feild, setFeild] = useState('');

  const registerUser = async (email, password, name) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      
      if (currentUser) {
        await currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://schoolapp-4f272.firebaseapp.com',
        });
        
        alert('Verification email sent');

        await firebase.firestore().collection('users')
          .doc(currentUser.uid)
          .set({
            name,
            lastName,
            email,
          });
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='main-reg'>
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="firstName">First Name</label>
      
          <input className="form__input" type="text" onChange={(e) => setName(e.target.value)} id="firstName" placeholder="" />
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} className="form__input" onChange={(e) => setLastName(e.target.value)} placeholder="" />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">Email</label>
          <input type="email" id="email" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" />
        </div>
        <div className="contuct">
          <label className="form__label" htmlFor="contuct">Contact</label>
          <input type="number" id="contuct" className="form__input" value={contuct} onChange={(e) => setContuct(e.target.value)} placeholder="" />
        </div>
        <div className="collegename">
          <label className="form__label" htmlFor="collegename">School/College</label>
          <input type="text" id="collegename" className="form__input" value={collegename} onChange={(e) => setCollegename(e.target.value)} placeholder="" />
        </div>
        <div className="year">
          <label className="form__label" htmlFor="year">Year of Study</label>
          <input type="text" id="year" className="form__input" value={year} onChange={(e) => setYear(e.target.value)} placeholder="" />
        </div>
        <div className="age">
          <label className="form__label" htmlFor="age">Age</label>
          <input type="number" id="age" className="form__input" value={age} onChange={(e) => setAge(e.target.value)} placeholder="" />
        </div>
        <div className="feild">
          <label className="form__label" htmlFor="feild">Interested Fields</label>
          <input type="text" id="feild" className="form__input" value={feild} onChange={(e) => setFeild(e.target.value)} placeholder="" />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" />
        </div>
      </div>
      <div className="footer">
        <button onClick={() => registerUser(email, password, name)} type="submit" className="btn"><Link to="/">Submit</Link></button>
      </div>
    </div>
    </div>
  )
}

export default StudentRegister;
