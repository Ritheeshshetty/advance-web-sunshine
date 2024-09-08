import React from 'react'
import { Link,useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <div className='profile'>
      <img src="./profile_demo.jpg" alt="profile" />
      <h1>Ritheesh S Shetty</h1>
      <h2>ritheeshshetty77@gmail.com</h2>
      <button onClick={handleLogout}><Link to='/login'>Logout</Link></button>
    </div>
  )
}

export default Settings;