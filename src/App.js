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
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';


function App() {

  const [nome, setNome] = useState() // para usar no treinamento de State Lift

  const meusItens= ['React', 'Angular', 'Django', 'Vue','jquery']

  return (
    <div className="App">

      <h1>React Router</h1>
      
    {/*
       <HelloWorld  inativar />

      <SayMyName nome="Jardel" idade="36" altura="1,80" cor="preta" />

      <List />
      deixei como comentario para não excluir os dados estudados.
    
      <Evento />    

      < Forms/>

      <Condicionais />

       <OutraLista itens={meusItens}/>

       <SeuNome setNome={setNome} /> 
      <Saudacao nome={nome}/>
              
      */}
      
<Router>

<ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/Empresa">Empresa</Link>
    </li>

    <li>
      <Link to="/Contato">Contato</Link>
    </li>
</ul>

<Routes>

  <Route path="/" element={<Home/>} />
  <Route path="/" element={<Contato/>} />
  <Route path="/" element={<Empresa/>} />    

</Routes>

</Router>

  
</div>
  );
  }

export default App;
