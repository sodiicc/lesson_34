import React from 'react';
import './App.css';
import User from './components/User.js'

function App() {
  const users = [
    {name: 'Vasyl', pet: 'Dog'},
    // {name: 'Petro', pet: 'Cat'},
    // {name: 'Ira', pet: 'Tiger'},
    // {name: 'Kostya', pet: 'Lion'},
    // {name: 'Kostya', pet: 'Lion'},
    // {name: 'Kostya', pet: 'Lion'},
    // {name: 'Kostya', pet: 'Lion'},
  ]
  return (
    <>
      <div className="App">
        <header className='header'>React APP</header>
        {
          users.map((user, index )=> {
            return <User key={user.name} name={user.name} pet={user.pet} />
          })
        }
      </div>
    </>
  );
}

export default App;
