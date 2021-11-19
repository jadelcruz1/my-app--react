import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import List from './components/List';
import Evento from './components/Evento';
import Forms from './components/Forms';
import Condicionais from './components/Condicionais';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import {useState} from 'react'
import Saudacao from './components/Saudacao';


function App() {

  const [nome, setNome] = useState() // para usar no treinamento de State Lift

  const meusItens= ['React', 'Angular', 'Django', 'Vue','jquery']

  return (
    <div className="App">

      <h1>State Lift</h1>
      
    {/*
       <HelloWorld  inativar />

      <SayMyName nome="Jardel" idade="36" altura="1,80" cor="preta" />

      <List />
      deixei como comentario para não excluir os dados estudados.
    
      <Evento />    

      < Forms/>

      <Condicionais />

       <OutraLista itens={meusItens}/>
       
      */}

      <SeuNome setNome={setNome} /> 
      <Saudacao nome={nome}/>
          

      
    
    </div>
  );
  }

export default App;
