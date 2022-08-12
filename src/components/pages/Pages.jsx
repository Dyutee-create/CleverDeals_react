import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Login from "../users/Login"
import SignUp from "../users/SignUp"
import Dashboard from "../users/Dashboard"
import Reset from "../users/Reset"
import OwnersDashboard from "../OwnersDashboard/OwnersDashboard"
import OwnersDashboardAll from "../OwnersDashboard/OwnersDashboardAll"
import OwnersDashboardBooked from "../OwnersDashboard/OwnersDashboardBooked"



const Pages = () => {

  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route  path='/users/Login' element ={<Login />}/>
          <Route  path ='/users/SignUp' element ={ <SignUp />}/>
          <Route path= '/users/Dashboard' element = {<Dashboard/>}/>
          <Route path= '/users/Reset' element = {<Reset/>}/>
          <Route exact path="/OwnersDashboard" component={OwnersDashboard}/>
          <Route exact path="/OwnersDashboardAll" component={OwnersDashboardAll}/>
          <Route exact path="/OwnersDashboardBooked" component={OwnersDashboardBooked}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
