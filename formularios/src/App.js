import React,{useState} from 'react'





function App() {
  const [nome,setNome] = useState('Digite seu nome');
  return (
    <>
    <input 
    type="text"
    name="fnome"
    value={nome}
    onChange={(e)=> setNome(e.target.value)}
    />

    Nome digitado: <p>{nome}</p>
    </>
  );
}

export default App;
