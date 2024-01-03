import React from 'react';
import './App.css';
import Main from './components/main/main';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;