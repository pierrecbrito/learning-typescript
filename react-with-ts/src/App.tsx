import React from 'react';

function App() {
  //Variables
  const name: string = 'Pierre';
  const isWorking: boolean = true;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {name}
          {isWorking && <span> is working</span>}
        </p>
      </header>
    </div>
  );
}

export default App;
