import './App.css';
import { useState } from 'react';

function App() {
  
  const [ contador, setContador ] = useState(0);

  function somar10(){
    if (contador <= 90){
      setContador (contador + 10);
    }
  }

  function somar(){
    if (contador < 100){
      setContador (contador + 1);
    }
  }

  function subtrair10(){
    if (contador >= 10){
      setContador (contador - 10);
    }
  }

  function subtrair(){
    if (contador > 0){
      setContador (contador - 1);
    }
  }
  
  return (
    <div className="App">
      <button onClick={somar}>+10</button>
      <button onClick={somar}>+</button>
      <p>{ contador }</p> 
      <button onClick={subtrair}>-</button>
      <button onClick={subtrair10}>-10</button>
    </div>
  );
}

export default App;
