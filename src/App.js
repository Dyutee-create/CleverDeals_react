import React from 'react';
//import "./App.css"
// import Pages from "./components/pages/Pages"
import {BrowserRouter} from 'react-router-dom';
import Router from './components/Router';





function App() {
  return(
    <BrowserRouter>
    <div className="App">
      {/* <Pages/> */}
      <Router/>
    </div>
    </BrowserRouter>
  )
  //return <Pages />
  //return <SignUp/>
}

export default App