/* eslint-disable no-undef */
import React, { useState, useEffect }   from 'react';
import './App.css';
import Header from './partials/Header';
import axios from "axios";
import Standings from './components/Standings';





function App() {



  const [leagueId, setLeagueId] = useState(61);
  const [scorer, setScorer] = useState([]);
  const [assist, setAssist] = useState([]);
  const [standings, setStandings] = useState({});


  function handleClick(value)   {
    setLeagueId(value)
  }




   useEffect(() => {
     fetchData()
  fetchScorer()
  fetchAssist()
  }, [leagueId])

  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {season: '2020', league: leagueId},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_XRAPIDKEY,
      'x-rapidapi-host': process.env.REACT_APP_XRAPIDHOST
    }
  };
  
  const fetchData = async () => { 
    await axios.request(options).then(function (response) {
    setStandings(response.data.response[0].league)
  }).catch(function (error) {
    console.error(error);
  });}

  const optionsScorer = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
    params: {league: leagueId, season: '2020'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_XRAPIDKEY,
      'x-rapidapi-host': process.env.REACT_APP_XRAPIDHOST
    }
  };

  const fetchScorer = async () => {
    await axios.request(optionsScorer).then(function (response) {
    setScorer(response.data.response)
  }).catch(function (error) {
    console.error(error);
  });
  }

  const optionsAssist = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/players/topassists',
    params: {league: leagueId, season: '2020'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_XRAPIDKEY,
      'x-rapidapi-host': process.env.REACT_APP_XRAPIDHOST
    }
  };
  
  const fetchAssist = async () => {
  await axios.request(optionsAssist).then(function (response) {
    setAssist(response.data.response)
  }).catch(function (error) {
    console.error(error);
  });
  }
  
  
  


  
    



  return (
    
      <div className="App">
        <Header handleClick={handleClick} />
      {/* <Header>
      <div onClick={e => handleClick(e, "value")}>
        <button value={140}>Blog</button>
      <button value={61}>FR</button>
      <button value={39}>Blog</button>
      <button value={78}>Blog</button>
      <button value={135}>Blog</button>
      </div>
      
      
        </Header> */}

     
        
          <Standings assist={assist} scorer={scorer} standings={standings} />
         
        
        
        
       
  
    </div>
   
    
  );
}

export default App;
