import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constants/secret';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [details, setDetails] = useState([])
  const getData = () => {
    axios
    .get(`${BASE_URL}`)
    .then((res) => {
      setDetails(res.data);
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <h1 className="React Wars >"> </h1>
      <Character details={getData}/>

    </div>
  );
}

export default App;
