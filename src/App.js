import './App.css';
import Navbar from './componrnts/Navbar';
import Textform from './componrnts/Textform';
import About from './componrnts/About';
import Alert from './componrnts/Alert'

import React, { useState } from 'react';
function App() {

  const[mode, setmode] = useState('light');
  const[textmode, settextmode] = useState("Enable Dark Mode");
  const[alert,setalert]=useState(null)

  const ShowAlert=(msg,type)=>{
       setalert({
        msg:msg,
        type:type
       })
       setTimeout(()=>{
           setalert(null);
       },2000);
  }

  const toggleMode=()=>{

    if(mode ==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      settextmode("Enable Dark Mode");
      ShowAlert('Light Mode has been Enabled','warning');
      document.title="Text Utills - Light Mode"

    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#000c1e';
      settextmode("Enable Light Mode");
      ShowAlert('Dark Mode has been Enabled','success');
      document.title="Text Utills - Dark Mode"

    }

  }

  

  const changeRed=()=>{
    document.body.style.backgroundColor='red';
  }
  const changeGreen=()=>{
    document.body.style.backgroundColor='green';
  }

  const changeyellow=()=>{
    document.body.style.backgroundColor='#856811';
  }
  return (
   <>
<Navbar title = "TextUtillities" red={changeRed} green={changeGreen} yellow={changeyellow} textmode={textmode} mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<Textform ShowAlert={ShowAlert} heading="Enter in the Textbox below:" mode={mode}/>
{/* <About/></About> */}
   </>
  );
}


export default App;
