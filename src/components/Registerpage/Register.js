import axios from 'axios';
import React, { useRef, useState } from 'react';
 import  '../Registerpage/Register.css';
import { FaUser } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
// import { SiGmail } from "react-icons/si";
// import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const validateName = () => {
    return nameRef.current?.value?.length >= 3;
  };

  const validateEmail = () => {
    // Basic email format validation
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(emailRef.current?.value);
  };

  const validatePassword = () => {
    //password validation
    const pattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(passwordRef.current?.value);
  };

  const handleRegister = async () => {
    if (validateName() && validateEmail() && validatePassword()) {
      try {
        const response = await axios.post('http://127.0.0.1:3001/register1', {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });

        if (response.status === 200) {
          setIsRegistered(true);
        } else {
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Please provide valid username, email, and password.');
    }
  };
  return (
    <div className='register-container'>
      <div className='sign-screen'>
        <div className='sign-screen__content'>
          {!isRegistered ? (
            <div className='sign'>
              <div className='sign__field'>
                <i className='sign__icon fas fa-user'>
                  <FaUser />
                </i>
                <input
                  type='text'
                  ref={nameRef}
                  placeholder='Enter your username'
                  className='sign__input'
                />
                {!validateName() ? (
                  <p>Username should have a minimum of 3 characters.</p>
                ) : null}
                {/* <div><i className='sign__icon si gmail'>
                <SiGmail />
                </i></div> */}
                
                <input
                  type='email'
                  ref={emailRef}
                  placeholder='Enter your email'
                  className='sign__input'
                />
                {validateEmail() ? (
                  <p>Email is valid!</p>
                ) : (
                  <p>Please enter a valid email address.</p>
                )}
                {/* <i className='sign__icon ri lock password'>
                <RiLockPasswordFill />
                </i> */}
                <input
                  type='password'
                  ref={passwordRef}
                  placeholder='Enter your password'
                  className='sign__input'
                />
                {validatePassword() ? (
                  <p>Password meets the criteria!</p>
                ) : (
                  <p>
                    Password should have at least 8 characters, one uppercase
                    letter, one lowercase letter, one number, and one special
                    character.
                  </p>
                )}
              </div>
              {/* ... Repeat for email and password inputs */}
              <button className='btnbutton sign__submit' onClick={handleRegister}>
                <span className='button__text'>Register</span>
                <i className='button__icon fas fa-chevron-right'>
                  {' '}
                  <FaChevronRight />
                </i>
              </button>
            </div>
          ) : (
            <div>
              <h2>Registration Successful!</h2>
              <p>You can now log in with your registered credentials.</p>
            </div>
          )}
        </div>
        <div className='screen__background'>
          {/* The shapes for background */}
        </div>
      </div>
    </div>
  );
};

export default Register;
//   return (
//     <div>
//       {!isRegistered ? (
//         <div>
//           <h2>Registration Page</h2>
//           <input
//             type="text"
//             ref={usernameRef}
//             placeholder="Enter your username"
//           />
//           {validateUsername() ? (
//             <p>Username is valid!</p>
//           ) : (
//             <p>Username should have a minimum of 5 characters.</p>
//           )}

//           <input
//             type="email"
//             ref={emailRef}
//             placeholder="Enter your email"
//           />
//           {validateEmail() ? (
//             <p>Email is valid!</p>
//           ) : (
//             <p>Please enter a valid email address.</p>
//           )}

//           <input
//             type="password"
//             ref={passwordRef}
//             placeholder="Enter your password"
//           />
//           {validatePassword() ? (
//             <p>Password meets the criteria!</p>
//           ) : (
//             <p>Password should have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.</p>
//           )}

//           <button onClick={handleRegister}>Register</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Registration Successful!</h2>
//           <p>You can now log in with your registered credentials.</p>
//         </div>
//       )}
//     </div>
//   );
// };