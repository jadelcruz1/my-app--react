import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      

      <HelloWorld />

      <SayMyName nome="Jardel" />
      <SayMyName idade="36" />
      <SayMyName altura="1,80" />


 
    </div>
  );
}

export default App;
