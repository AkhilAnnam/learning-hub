import React, { useState } from 'react';
import axios from 'axios';
import logo from '../Login/logo.png';


import './Login.css'; // Make sure to adjust the path based on your file structure
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userData,setUserData] = useState({
    email : "",
    password: ""
  })
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();


  const handleChange = (event) =>{
    console.log(event)
    const {name,value} = event.target;
    setUserData((prev)=>({
      ...prev,
      [name]: value
    }))   
    setErrors((prevState)=>({
      ...prevState,[name]:''
    }))
    
  }

  const validateLogin = () =>{
    const errors = {}
    if(!userData.email){
     errors.email = "Email is reqiuired"
    }
   if(!userData.password){
      errors.password = "Password is required"
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }



  // const validatePassword = () => {
  //   // Adjust the password pattern as needed
  //   const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   return passwordPattern.test(password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit called")
    if (validateLogin()) {
      console.log('validation successful')
      try {
        // Send the form data to your server using Axios
        const response = await axios.post('http://127.0.0.1:3001/login1', userData);


        if (response.status === 200) {
          localStorage.setItem('token', 'loggedin');
          navigate('/home')
          
        } else {
          alert("Login Failed, please try again")
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      alert("login failed")
    }

  };
  console.log(errors)
  console.log(userData)

  return (

    <div class="login-container">
        <div class="login-left">
            <div class="cen">
                <h1>Welcome </h1>
                <p class="PP">We are glad to see you back with us</p>
            </div>
            <div>
                <form class="form1" action="">
                    <div class="bla">
                        <input type="text" name="email" id="" placeholder="Username" class="inp" value={userData?.email} onChange={handleChange}/>
                        <i class='bx bxs-user'></i>
                        {errors?.email && <p style={{color:"#ff0000"}}>{errors?.email}</p>}
                    </div>
                    <div class="bla">
                        <input type="text" name="password" id="" placeholder="Password" class="inp" value={userData?.password} onChange={handleChange}/>
                        <i class='bx bxs-lock-alt'></i>
                        {errors?.password && <p style={{color:"#ff0000"}}>{errors?.password}</p>}
                    </div>
                    <div class="submit-button">
                        <button onClick={handleSubmit}>NEXT</button>
                    </div>
                    <div>
                        <fieldset>
                            <legend class="len"><b>Login</b> with others </legend>
                        </fieldset>
                        <div class="CLA">
                            <button class="btn2">login with <b>google</b></button>
                            <button class="btn2">login with <b>Facebook</b></button>
                        </div>
                        <div>
                            Dont Have An Account? <a href="../LOGINPAGE/sign.html">Sign Up</a>
                        </div>
                    </div>

                </form>
            </div>


        </div>
        <div class="login-right">
            <img style={{width:"100%"}} src={logo}alt=""/>

        </div>
    </div>
    // <div className="login-container">
    //   <div className="login-left">
    //     <div className="login-cen">
    //       <h1>Welcome</h1>
    //       <p className="login-pp">We are glad to see you back with us</p>
    //     </div>
    //     <div>
    //       <form className="login-form1" onSubmit={handleSubmit}>
    //         <div className="login-bla">
    //           <input
    //             type="text"
    //             placeholder="Username"
    //             className="login-inp"
    //             value={name}
    //             onChange={handleNameChange}
    //           />
    //           <FaUser className="icon" />
    //         </div>
    //         <div className="login-bla">
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             className="login-inp"
    //             value={password}
    //             onChange={handlePasswordChange}
    //           />
    //           <FaLock className="icon" />
    //         </div>
    //         <div className="login-btn">
    //           <button type="submit">NEXT</button>
    //         </div>
    //         <div>
    //           <fieldset>
    //             <legend className="len"><b>Login</b> with others </legend>
    //           </fieldset>
    //           <div className="login-CLA">
    //             <button className="login-btn2">login with <b>google</b></button>
    //             <button className="login-btn2">login with <b>Facebook</b></button>
    //           </div>
    //           <div>
    //             Don't Have An Account? <a href="">Sign Up</a>
    //           </div>
    //         </div>
    //       </form>
    //       {error && <p className="error">{error}</p>}
    //       {loginSuccess && <p className="success">Login successful!</p>}
    //     </div>
    //   </div>
    //   <div className="login-right">
    //     <img src="" alt="" />
    //   </div>
    // </div>
  );
}

export default Login;
