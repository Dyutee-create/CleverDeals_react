
// import React, { useState } from "react";

// import { logout, signup, useAuth } from "../../firebase";
// import img from "../images/pricing.jpg"
// import Back from "../common/Back"
// import "./user.css"


// const SignUp = ()=>{

//   const [firstName, setFirstName] = useState(null);
//   const [lastName, setLastName] = useState(null);
//    const [email, setEmail] = useState(null);
//    const [password,setPassword] = useState(null);
//   const [confirmPassword,setConfirmPassword] = useState(null);
//   const [user, loading] = useAuthState(auth);
//   const [loading, setLoading] = useState(false);
//   const currentUser = useAuth();
//   const navigate = useNavigate();

//   const emailRef = email;
//   const passwordRef = password;

//   const register = () => {
//     if (!firstName && !lastName) alert("Please enter  Full name");
//     registerWithEmailAndPassword(firstName, lastName, email, password, confirmPassword);
//   };
//   useEffect(() => {
//     if (loading) return;
//     if (user) navigate('/dashboard',{ replace :true});
//   }, [user, loading, navigate]);
// async function handleSignup(){
//   setLoading(true);
//   try {
//     await signup(email.current.value, password.current.value);
//   } catch  {
//     alert("Error!");
//   }
//   setLoading(false);
// }

// async function handleLogout(){
//   setLoading(true);
//   try{
//     await logout();
//   } catch{
//     alert("Error!");
//   }
//   setLoading(false);
// }
//    const handleInputChange = (e) => {
//      const {id , value} = e.target;
//     if(id === "firstName"){
//         setFirstName(value);
//     }
//     if(id === "lastName"){
//         setLastName(value);
//     }
//      if(id === "email"){
//         setEmail(value);
//     }
//     if(id === "password"){
//         setPassword(value);
//     }
//     if(id === "confirmPassword"){
//         setConfirmPassword(value);
//     }

// }

// const handleSubmit  = () => {

//         let obj = {
//           firstName : firstName,
//           lastName:lastName,
//           email:email,
//           password:password,
//           confirmPassword:confirmPassword,
//       }       
//       const newPostKey = push(child(ref(database), 'posts')).key;
//       const updates = {};
//       updates['/' + newPostKey] = obj
//       return update(ref(database), updates);
// }







// return(
//   <>
//     <section className='signup mb'>
//         <Back name='Sign Up with  Us' title='Get Helps & Friendly Support' cover={img} />
//         <div className='container'>
//           <div>Currently logged in as: {currentUser?.email}</div>
         
//           <form className='shadow' title="Signup">
//             <br/>
//             <h4>Fillup The Form</h4> <br />
        
//         <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange ={(e) => handleInputChange(e)}
//             id="firstName"
//             className="form-control"
//             placeholder="First name"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Last name</label>
//           <input type="text" 
//           value={lastName}
//           onChange ={(e) => handleInputChange(e)}
//           id="lastName"
//           className="form-control" 
//           placeholder="Last name" />
//         </div>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             value={emailRef}
//             onChange ={(e) => handleInputChange(e)}
//             id="email"
//             className="form-control"
//             placeholder="Enter email"
            
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             value={passwordRef}
//             onChange ={(e) => handleInputChange(e)}
//             id="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <br/>
//         <div className="mb-3">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange ={(e) => handleInputChange(e)}
//             id="confirmPassword"
//             className="form-control"
//             placeholder="Confirm password"
//           />
//         </div>
//         <br/>
//         <div className="d-grid">
//           <button type="submit" 
//           onClick={handleSignup}
//           disabled={loading || currentUser}
//           className="btn btn-primary">
//             Sign Up
//           </button>
          
//           <button
//           className="register__btn register__google">

//           Register with Google

//         </button>
//         <button 
//         disabled={ loading || !currentUser}
//         onClick={handleLogout}>Log Out</button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/Login">sign in?</a>
//         </p>
//       </form>
//       </div>
//       </section>



      
//       </>
// )
//   }
//   export default SignUp
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import "./user.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
         <input
          type="password"
          className="register__textBox"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>

        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;