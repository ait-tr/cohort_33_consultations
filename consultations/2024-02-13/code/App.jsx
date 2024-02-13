import { useState } from 'react';
import './App.css';
import Ivan from './Ivan';
import John from './John';
import AsyncRequest from './AsyncRequest';

function App() {
  const [state, setState] = useState(null);
  const [setColor, setRedColor] = useState('redColorClass');

  function getHelloWorld() {
    setState('Hello World');
  }
  return (
    <>
      <button onClick={getHelloWorld}>set Hello world</button>
      <button
        onClick={() => {
          setRedColor('greenColorClass');
        }}
      >
        green
      </button>
      <h1 className={setColor}>{state}</h1>
      <Ivan />
      <John />
      <AsyncRequest />
    </>
  );
}
//Произвел какие то корректировки
export default App;
