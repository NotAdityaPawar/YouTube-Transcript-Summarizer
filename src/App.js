import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import yts from './images/yts.PNG';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
const [alert, setAlert] = useState(null)
const showAlert = (message,type)=>{
  setAlert({
    msg: message ,
    type: type
  });
  setTimeout(() => {
    setAlert(null)
  }, 2000);
    }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled" , "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success")
    }
  }
  
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title={yts} mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Your Youtube Video Summary" mode={mode}/>
    </div>
    
    </> 
  );
}

export default App;