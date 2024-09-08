import {React,useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
// useContext

const Login=()=> {
  const host='5000'
  const [credentials, setCredentials] = useState({email:"",password:""})
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response = await fetch(`http://localhost:${host}/api/auth/login/`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email:credentials.email,password:credentials.password}), 
        });
        const json= await response.json()
        console.log(json)
        if(json.success){
          //save the auth token and redirect
          localStorage.setItem('token',json.authToken)
          // showAlert("Login successfull 🔥",'success')
          navigate('/home');
          // alert(credentials.email);
        }
        else if(json.error){
          console.log(json.error)
          // showAlert(json.error,'danger')
        }
        else{
          // showAlert("invalid Credentials",'danger')
          console.log("invalid")
        }
  }
  const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const [passtype, setPasstype] = useState("password")
  const pass=()=>{
    if(passtype==='password'){
      setPasstype('text')
     }
     else{
      setPasstype('password')
     }
  }
  return  ( <>
  <div className="login">
  <div className='inlog'>
      <form action="">
      <p className='loginicon'><i className="fa-regular fa-user"></i></p>
          <label htmlFor="email"></label>
          <input type="email" id="email" name='email' value={credentials.email} onChange={onChange} placeholder='Enter your email address'autoComplete='off' autoFocus="on" required/>
          <label htmlFor="password"></label>
          <i className={`fa-solid fa-${passtype==='password'?'eye-slash':'eye'}`} onClick={pass}></i>
          <input type={passtype} id="password" name='password' value={credentials.password} onChange={onChange} placeholder='Enter your password' required/>
          <input type="button" value={"Login"} onClick={handleSubmit}/>
          <p>No accounts create one? <Link to="/signup">click here</Link> </p>
      </form>
  </div>
  </div>
</>
  )
}

export default Login;
