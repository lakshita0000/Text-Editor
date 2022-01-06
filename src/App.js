
import './App.css';

 import About from './components/About';
import NavBar from './components/NavBar';
 import TextForm from './components/TextForm';
 import React, { useState } from 'react'
 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light')
    {
    setMode('dark');
    }
    else {
    setMode('light');
  }
  }
  
  return (
    <>
    <Router>
<NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text to analyze" /> 
          
          </Route>
        </Switch>

</div>
</Router>
    </>
  );
}

export default App;
