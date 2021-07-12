import logo from './logo.svg';
import ledOn from './components/img/ledOn.png'
import ledOff from './components/img/ledOff.png'
import { useState } from 'react';


function App() {

  const [ligado,setToggle] = useState(false);
  
  return (
    <>
    <h1>Hugo Rocha</h1>

    <img style = {{width:'500px',height:'500px'}}src={ligado?ledOn:ledOff}/>
    <button onClick={()=>setToggle(!ligado)}>toggle</button>
    </>
  );
}

export default App;
