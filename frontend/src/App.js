import React from 'react';

import './global.css';

import Routes from './routes';
function App() {


  /**const [counter, setCounter] = useState(0); //estado!

  function increment(){
    setCounter(counter + 1);
  }*/
  return (
    <Routes />
    /**<div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>*/
  );
}

export default App;
