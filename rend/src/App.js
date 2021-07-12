import logo from './logo.svg';

function App() {

  const cumprimento=()=>{

    const hora = new Date().getHours();

    if(hora>=6 && hora<13){
      return <p>Bom dia!</p>
    }
    else if(hora>=13 && hora<18){
      return <p>Boa Tarde!</p>
    }
    else{
     return  <p>Boa Noite!</p>
    }

  }
  return (
    <>
    {cumprimento()}
    </>
  );
}

export default App;
