import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [list, setList] = useState([])
  
  useEffect(()=>{
    axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((resp)=> setList(resp.data.results))
  })
  
  return (
    <div id='page'>
    { list.map((item) => (
      
      <Pokemon data={item}/>
      ))}
      </div>
      );
    }
    
    const Pokemon = ({data} :{data :any}) => {
      const [info, setInfo] = useState<any>(null)
      useEffect(()=>{
        axios
        .get(data.url)
        .then((resp)=> setInfo(resp.data));
      }, []);
      if (info === null){
        return <div>---</div>
      }
      
      return <div>
        <span><b>{info.name}</b> - EXP{info.base_experience}</span>
        <span ><img src={info.sprites.front_default} alt="" /></span>
  </div>
      
      
      
      
    }
    
    export default App;
    