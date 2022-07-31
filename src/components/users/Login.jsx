
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth , logInWithEmailAndPassword, signInWithGoogle} from "../../firebase";
//import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
//import img from "../images/pricing.jpg"
//import Back from "../common/Back"
import "./user.css"



  function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    //const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/Dashboard");
    }, [user, loading, navigate]);
    
    return (
      
      <section className='Login mb'>
        
        <div className='container'>
          <form className='shadow'>
     
          <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
      </form>
      </div>
      </section>
    )
  }
export default Login;
