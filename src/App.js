import React, { useEffect, useState } from 'react';
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
  
  useEffect(() => {
    axios
    .get(`${BASE_URL}`)
    .then((res) => {
      console.log(res.data.results);
      setDetails(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="reactwars"> React Wars </h1>
      {details.map((cr) => 
        <Character key={cr.name} details={cr}/>
      )}
      

    </div>
  );
}

export default App;
