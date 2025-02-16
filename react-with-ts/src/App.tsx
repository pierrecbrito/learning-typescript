import React from 'react';
import FirstComponent from './components/FirstComponent';

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
        <FirstComponent />
      </header>
    </div>
  );
}

export default App;
