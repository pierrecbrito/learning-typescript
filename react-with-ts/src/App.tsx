import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
import State from './components/State';
import { Category } from './components/Destructuring';
import { createContext } from 'vm';
import Context from './components/Context';

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

const contextValue = {
  language: "JavaScript",
  framework: "Express",
  projects: 5
}

export const AppContext = React.createContext<IAppContext | null>(contextValue);

function App() {
  //Variables
  const name: string = 'Pierre';
  const isWorking: boolean = true;
  //functions
  const userGreeting = (name: string): string => {
    return `Hello ${name}`;
  }

  type TextOrNull = string | null;
  const myText:TextOrNull = null;
  const myText2:TextOrNull = 'Hello'; 


  return (
    <AppContext.Provider value={contextValue}>
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
          <Context />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
