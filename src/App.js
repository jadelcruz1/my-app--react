import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import List from './components/List';
import Evento from './components/Evento';
import Forms from './components/Forms';


function App() {
  return (
    <div className="App">
      

      <HelloWorld />

      <SayMyName nome="Jardel" idade="36" altura="1,80" cor="preta" />

      <List />
      
      <Evento />

      < Forms/>

    </div>
  );
}

export default App;
