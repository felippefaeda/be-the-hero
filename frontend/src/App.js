import React from 'react';
// import Header from './Header';

import './global.css';

import Routes from './routes';


function App() {
  /* const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  } */ 

  return (
    /*<Header title="Semana Omnistack 11">
      Semana Omnistack 11
    </Header>*/

    /* 
    <div>
      <Header> Contador: {counter} </Header>
      <button onClick={increment}>Incrementar</button>
    </div>*/

    <Routes/>
  );
}

export default App;
