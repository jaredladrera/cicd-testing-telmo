import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getname();
  }, [])

  const getname = async() => {
    const { data } = await axios.get('/names');

    setUser(data)
  }
  
  return (
    <>
      <h1>Hello This is my Website</h1>
      <h2>Welcome {user}</h2>
    </>
  );
}

export default App;
