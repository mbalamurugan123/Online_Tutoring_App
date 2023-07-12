import React from 'react';
import './styles/sidebar.css';
class Sidenav extends React.Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav} >&times;</a>
          <a className='side-btn'>About</a>
          <a className='side-btn'>Assignments</a>
          <a className='side-btn'>Certification</a>
          <a className='side-btn'>Virtual Classroom</a>
          <a className='side-btn'>Drives</a>
        </div>
        <span style={{ fontSize: '50px', cursor: 'pointer' ,marginLeft: '10px', color:'white',paddingBottom:'10px'}} onClick={this.openNav}>&#9776;</span>
      </div>
    );
  }
}

export default Sidenav;
