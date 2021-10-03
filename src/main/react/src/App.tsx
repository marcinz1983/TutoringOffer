import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [example, setExample] = useState([]);

  useEffect(() => {
    axios.get("/api/example/read")
        .then(response=>{
          setExample(response.data)
        })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          INIT
        </p>
          {example.map((value: any) => <li key={`${value.firstName}-${value.lastName}`}>
              {value.firstName} {value.lastName} - {value.career}
          </li>)}
      </header>
    </div>
  );
}

export default App;
