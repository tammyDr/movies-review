import './app.css'
import Header from './Components/Header';
import { useState } from 'react';

function App() {

const [number,setNum] = useState(1);

function inc () {
  setNum (number+1);
}

function dec () {
  setNum (number- 1);
}

  return (
    <>
    <div>
     <Header/>
      </div>
      
    <div className='main'>
    <h1 className='heading'>{number}</h1>       
          <div className='buttons'>
            <button className='btn' onClick={inc}>Increment</button>
            <button className='btn' onClick={dec}>Decrement</button>
          </div>
        </div>
      </>
  );
}

export default App;
