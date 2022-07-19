import React from 'react';
import './App.css';
import { Name } from './components/Name';

function App() {

  return (
    <div className="App">
      <Name firstName='Bob' lastName='Smith' />
      <Name firstName='Different' lastName='Data' />
    </div>
  );
}

export default App;
