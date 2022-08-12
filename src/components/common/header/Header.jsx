/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react"
//import "../../../../node_modules/dist/css/bootstrap.min.css"
import "./header.css"
import "../../users/Login"
import "../../users/SignUp"
import { nav } from "../../data/Data"
import { user_sats } from "../../data/Data"
import { Link } from "react-router-dom"


import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


import { auth,db, logout } from "../../../firebase";
 
import { query, collection, getDocs, where } from "firebase/firestore";




function Header() {
  const [navList, setNavList] = useState(false)
  const [userList, setUserList] = useState(false)

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const Logout = logout();
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/SignUp");
    fetchUserName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
            <h3>Clever Deals</h3>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  {
                  //eslint-disable-next-line react/jsx-no-undef 
                  }
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              My List
            </h4>
            
            <div className='user'>
            
            <ul className={userList ? "small" : "flex"}>
              <i className='fa fa-sign-out'></i>
              {user_sats.map((list, index) => (
                
                <li key={index}>
                  {
                  //eslint-disable-next-line react/jsx-no-undef 
                  }
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
              
            </div>
            <div className='buttom flex'>
              
              <div>{name}</div>
              <div>{user?.email}</div>
              <button className="dashboard__btn" onClick={Logout}>
                Logout
             </button>
       </div>
          </div>
          

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
          <div className='userToggle'>
          <button onClick={() => setUserList(!userList)}>{userList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
