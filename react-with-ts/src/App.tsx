import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
import State from './components/State';
import { Category } from './components/Destructuring';

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
        <SecondComponent name={name} />
        <Destructuring title="Title" content="Content" commentQty={1} tags={['tag1', 'tag2']} category={Category.TS} />
        <State />
      </header>
    </div>
  );
}

export default App;
