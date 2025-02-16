import React from 'react';

function App() {
  //Variables
  const name: string = 'Pierre';
  const isWorking: boolean = true;
  //functions
  const userGreeting = (name: string): string => {
    return `Hello ${name}`;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {userGreeting(name)}
          {isWorking && <span> is working</span>}
        </p>
      </header>
    </div>
  );
}

export default App;
