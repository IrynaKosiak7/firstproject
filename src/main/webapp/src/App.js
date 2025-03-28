import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello universe! <span>{value}</span></p>
        <div>
          <button onClick={() => setValue(value + 1)}>+</button>
          <button onClick={() => setValue(value - 1)}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
