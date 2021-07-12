
import './App.css';

export default function App() {

  const carros = [
    {categoria: "SUV" , nome: "Tcross", preco: "120.000"},
    {categoria: "SEDA" , nome: "COROLLA", preco: "180.000"},
    {categoria: "CAMINHONETE" , nome: "HILUX", preco: "190.000"},
    {categoria: "RUIM" , nome: "UP", preco: "120,00"},
    
  ];

  const listaCarros = carros.map(
    (c)=> <p>Cat: {c.categoria} - Nome: {c.nome} - Preço: {c.preco}</p>
  );
  return (
  <>
  <ul>{listaCarros}</ul>
  </>
  );
}

