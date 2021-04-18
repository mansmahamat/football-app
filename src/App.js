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
  const [standings, setStandings] = useState({
    "id":61,
    "name":"Ligue 1",
    "country":"France",
    "logo":"https://media.api-sports.io/football/leagues/61.png",
    "flag":"https://media.api-sports.io/flags/fr.svg",
    "season":2020,
    "standings":[
    [
    {
    "rank":1,
    "team":{
    "id":79,
    "name":"Lille",
    "logo":"https://media.api-sports.io/football/teams/79.png"
    },
    "points":70,
    "goalsDiff":34,
    "group":"Ligue 1",
    "form":"DWWLD",
    "status":"same",
    "description":"Promotion - Champions League (Group Stage)",
    "all":{
    "played":33,
    "win":20,
    "draw":10,
    "lose":3,
    "goals":{
    "for":54,
    "against":20
    }
    },
    "home":{
    "played":17,
    "win":9,
    "draw":6,
    "lose":2,
    "goals":{
    "for":26,
    "against":11
    }
    },
    "away":{
    "played":16,
    "win":11,
    "draw":4,
    "lose":1,
    "goals":{
    "for":28,
    "against":9
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":2,
    "team":{
    "id":85,
    "name":"Paris Saint Germain",
    "logo":"https://media.api-sports.io/football/teams/85.png"
    },
    "points":66,
    "goalsDiff":48,
    "group":"Ligue 1",
    "form":"WLWLW",
    "status":"same",
    "description":"Promotion - Champions League (Group Stage)",
    "all":{
    "played":32,
    "win":21,
    "draw":3,
    "lose":8,
    "goals":{
    "for":71,
    "against":23
    }
    },
    "home":{
    "played":16,
    "win":10,
    "draw":1,
    "lose":5,
    "goals":{
    "for":35,
    "against":11
    }
    },
    "away":{
    "played":16,
    "win":11,
    "draw":2,
    "lose":3,
    "goals":{
    "for":36,
    "against":12
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":3,
    "team":{
    "id":91,
    "name":"Monaco",
    "logo":"https://media.api-sports.io/football/teams/91.png"
    },
    "points":65,
    "goalsDiff":29,
    "group":"Ligue 1",
    "form":"WWWDL",
    "status":"same",
    "description":"Promotion - Champions League (Qualification)",
    "all":{
    "played":32,
    "win":20,
    "draw":5,
    "lose":7,
    "goals":{
    "for":67,
    "against":38
    }
    },
    "home":{
    "played":17,
    "win":11,
    "draw":5,
    "lose":1,
    "goals":{
    "for":39,
    "against":17
    }
    },
    "away":{
    "played":15,
    "win":9,
    "draw":0,
    "lose":6,
    "goals":{
    "for":28,
    "against":21
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":4,
    "team":{
    "id":80,
    "name":"Lyon",
    "logo":"https://media.api-sports.io/football/teams/80.png"
    },
    "points":64,
    "goalsDiff":32,
    "group":"Ligue 1",
    "form":"WDLDW",
    "status":"same",
    "description":"Promotion - Europa League (Group Stage)",
    "all":{
    "played":32,
    "win":18,
    "draw":10,
    "lose":4,
    "goals":{
    "for":63,
    "against":31
    }
    },
    "home":{
    "played":16,
    "win":10,
    "draw":3,
    "lose":3,
    "goals":{
    "for":34,
    "against":16
    }
    },
    "away":{
    "played":16,
    "win":8,
    "draw":7,
    "lose":1,
    "goals":{
    "for":29,
    "against":15
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":5,
    "team":{
    "id":116,
    "name":"Lens",
    "logo":"https://media.api-sports.io/football/teams/116.png"
    },
    "points":52,
    "goalsDiff":7,
    "group":"Ligue 1",
    "form":"WDWDW",
    "status":"same",
    "description":"Promotion - Europa Conference League (Qualification)",
    "all":{
    "played":32,
    "win":14,
    "draw":10,
    "lose":8,
    "goals":{
    "for":51,
    "against":44
    }
    },
    "home":{
    "played":16,
    "win":6,
    "draw":6,
    "lose":4,
    "goals":{
    "for":26,
    "against":22
    }
    },
    "away":{
    "played":16,
    "win":8,
    "draw":4,
    "lose":4,
    "goals":{
    "for":25,
    "against":22
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":6,
    "team":{
    "id":81,
    "name":"Marseille",
    "logo":"https://media.api-sports.io/football/teams/81.png"
    },
    "points":49,
    "goalsDiff":4,
    "group":"Ligue 1",
    "form":"DWLWW",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":13,
    "draw":10,
    "lose":9,
    "goals":{
    "for":43,
    "against":39
    }
    },
    "home":{
    "played":16,
    "win":8,
    "draw":4,
    "lose":4,
    "goals":{
    "for":25,
    "against":18
    }
    },
    "away":{
    "played":16,
    "win":5,
    "draw":6,
    "lose":5,
    "goals":{
    "for":18,
    "against":21
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":7,
    "team":{
    "id":94,
    "name":"Rennes",
    "logo":"https://media.api-sports.io/football/teams/94.png"
    },
    "points":48,
    "goalsDiff":5,
    "group":"Ligue 1",
    "form":"WDWWL",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":13,
    "draw":9,
    "lose":10,
    "goals":{
    "for":40,
    "against":35
    }
    },
    "home":{
    "played":16,
    "win":7,
    "draw":3,
    "lose":6,
    "goals":{
    "for":18,
    "against":19
    }
    },
    "away":{
    "played":16,
    "win":6,
    "draw":6,
    "lose":4,
    "goals":{
    "for":22,
    "against":16
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":8,
    "team":{
    "id":82,
    "name":"Montpellier",
    "logo":"https://media.api-sports.io/football/teams/82.png"
    },
    "points":47,
    "goalsDiff":-1,
    "group":"Ligue 1",
    "form":"DDDWD",
    "status":"same",
    "description":null,
    "all":{
    "played":33,
    "win":12,
    "draw":11,
    "lose":10,
    "goals":{
    "for":53,
    "against":54
    }
    },
    "home":{
    "played":17,
    "win":7,
    "draw":3,
    "lose":7,
    "goals":{
    "for":33,
    "against":33
    }
    },
    "away":{
    "played":16,
    "win":5,
    "draw":8,
    "lose":3,
    "goals":{
    "for":20,
    "against":21
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":9,
    "team":{
    "id":84,
    "name":"Nice",
    "logo":"https://media.api-sports.io/football/teams/84.png"
    },
    "points":43,
    "goalsDiff":-1,
    "group":"Ligue 1",
    "form":"DWWDW",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":12,
    "draw":7,
    "lose":13,
    "goals":{
    "for":41,
    "against":42
    }
    },
    "home":{
    "played":16,
    "win":5,
    "draw":3,
    "lose":8,
    "goals":{
    "for":19,
    "against":25
    }
    },
    "away":{
    "played":16,
    "win":7,
    "draw":4,
    "lose":5,
    "goals":{
    "for":22,
    "against":17
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":10,
    "team":{
    "id":112,
    "name":"Metz",
    "logo":"https://media.api-sports.io/football/teams/112.png"
    },
    "points":42,
    "goalsDiff":-2,
    "group":"Ligue 1",
    "form":"LLLDL",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":11,
    "draw":9,
    "lose":12,
    "goals":{
    "for":36,
    "against":38
    }
    },
    "home":{
    "played":16,
    "win":5,
    "draw":4,
    "lose":7,
    "goals":{
    "for":17,
    "against":19
    }
    },
    "away":{
    "played":16,
    "win":6,
    "draw":5,
    "lose":5,
    "goals":{
    "for":19,
    "against":19
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":11,
    "team":{
    "id":77,
    "name":"Angers",
    "logo":"https://media.api-sports.io/football/teams/77.png"
    },
    "points":41,
    "goalsDiff":-13,
    "group":"Ligue 1",
    "form":"LDDLW",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":11,
    "draw":8,
    "lose":13,
    "goals":{
    "for":34,
    "against":47
    }
    },
    "home":{
    "played":15,
    "win":5,
    "draw":3,
    "lose":7,
    "goals":{
    "for":16,
    "against":21
    }
    },
    "away":{
    "played":17,
    "win":6,
    "draw":5,
    "lose":6,
    "goals":{
    "for":18,
    "against":26
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":12,
    "team":{
    "id":93,
    "name":"Reims",
    "logo":"https://media.api-sports.io/football/teams/93.png"
    },
    "points":40,
    "goalsDiff":0,
    "group":"Ligue 1",
    "form":"DDWDW",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":9,
    "draw":13,
    "lose":10,
    "goals":{
    "for":38,
    "against":38
    }
    },
    "home":{
    "played":15,
    "win":4,
    "draw":7,
    "lose":4,
    "goals":{
    "for":14,
    "against":15
    }
    },
    "away":{
    "played":17,
    "win":5,
    "draw":6,
    "lose":6,
    "goals":{
    "for":24,
    "against":23
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":13,
    "team":{
    "id":1063,
    "name":"Saint Etienne",
    "logo":"https://media.api-sports.io/football/teams/1063.png"
    },
    "points":39,
    "goalsDiff":-11,
    "group":"Ligue 1",
    "form":"WWLWL",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":10,
    "draw":9,
    "lose":13,
    "goals":{
    "for":36,
    "against":47
    }
    },
    "home":{
    "played":16,
    "win":4,
    "draw":6,
    "lose":6,
    "goals":{
    "for":18,
    "against":26
    }
    },
    "away":{
    "played":16,
    "win":6,
    "draw":3,
    "lose":7,
    "goals":{
    "for":18,
    "against":21
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":14,
    "team":{
    "id":95,
    "name":"Strasbourg",
    "logo":"https://media.api-sports.io/football/teams/95.png"
    },
    "points":36,
    "goalsDiff":-9,
    "group":"Ligue 1",
    "form":"LWLLW",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":10,
    "draw":6,
    "lose":16,
    "goals":{
    "for":41,
    "against":50
    }
    },
    "home":{
    "played":16,
    "win":4,
    "draw":4,
    "lose":8,
    "goals":{
    "for":17,
    "against":23
    }
    },
    "away":{
    "played":16,
    "win":6,
    "draw":2,
    "lose":8,
    "goals":{
    "for":24,
    "against":27
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":15,
    "team":{
    "id":78,
    "name":"Bordeaux",
    "logo":"https://media.api-sports.io/football/teams/78.png"
    },
    "points":36,
    "goalsDiff":-10,
    "group":"Ligue 1",
    "form":"LLLWL",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":10,
    "draw":6,
    "lose":16,
    "goals":{
    "for":35,
    "against":45
    }
    },
    "home":{
    "played":16,
    "win":5,
    "draw":4,
    "lose":7,
    "goals":{
    "for":15,
    "against":18
    }
    },
    "away":{
    "played":16,
    "win":5,
    "draw":2,
    "lose":9,
    "goals":{
    "for":20,
    "against":27
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":16,
    "team":{
    "id":106,
    "name":"Stade Brestois 29",
    "logo":"https://media.api-sports.io/football/teams/106.png"
    },
    "points":36,
    "goalsDiff":-11,
    "group":"Ligue 1",
    "form":"DLDLW",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":10,
    "draw":6,
    "lose":16,
    "goals":{
    "for":44,
    "against":55
    }
    },
    "home":{
    "played":16,
    "win":8,
    "draw":3,
    "lose":5,
    "goals":{
    "for":30,
    "against":26
    }
    },
    "away":{
    "played":16,
    "win":2,
    "draw":3,
    "lose":11,
    "goals":{
    "for":14,
    "against":29
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":17,
    "team":{
    "id":97,
    "name":"Lorient",
    "logo":"https://media.api-sports.io/football/teams/97.png"
    },
    "points":32,
    "goalsDiff":-20,
    "group":"Ligue 1",
    "form":"LWDDD",
    "status":"same",
    "description":null,
    "all":{
    "played":32,
    "win":8,
    "draw":8,
    "lose":16,
    "goals":{
    "for":38,
    "against":58
    }
    },
    "home":{
    "played":16,
    "win":7,
    "draw":2,
    "lose":7,
    "goals":{
    "for":23,
    "against":27
    }
    },
    "away":{
    "played":16,
    "win":1,
    "draw":6,
    "lose":9,
    "goals":{
    "for":15,
    "against":31
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":18,
    "team":{
    "id":92,
    "name":"Nimes",
    "logo":"https://media.api-sports.io/football/teams/92.png"
    },
    "points":30,
    "goalsDiff":-28,
    "group":"Ligue 1",
    "form":"DLWDL",
    "status":"same",
    "description":"Ligue 1 (Relegation)",
    "all":{
    "played":32,
    "win":8,
    "draw":6,
    "lose":18,
    "goals":{
    "for":31,
    "against":59
    }
    },
    "home":{
    "played":16,
    "win":3,
    "draw":3,
    "lose":10,
    "goals":{
    "for":17,
    "against":31
    }
    },
    "away":{
    "played":16,
    "win":5,
    "draw":3,
    "lose":8,
    "goals":{
    "for":14,
    "against":28
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":19,
    "team":{
    "id":83,
    "name":"Nantes",
    "logo":"https://media.api-sports.io/football/teams/83.png"
    },
    "points":28,
    "goalsDiff":-17,
    "group":"Ligue 1",
    "form":"LLDWL",
    "status":"same",
    "description":"Relegation - Ligue 2",
    "all":{
    "played":32,
    "win":5,
    "draw":13,
    "lose":14,
    "goals":{
    "for":32,
    "against":49
    }
    },
    "home":{
    "played":16,
    "win":2,
    "draw":8,
    "lose":6,
    "goals":{
    "for":16,
    "against":25
    }
    },
    "away":{
    "played":16,
    "win":3,
    "draw":5,
    "lose":8,
    "goals":{
    "for":16,
    "against":24
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    },
    {
    "rank":20,
    "team":{
    "id":89,
    "name":"Dijon",
    "logo":"https://media.api-sports.io/football/teams/89.png"
    },
    "points":15,
    "goalsDiff":-36,
    "group":"Ligue 1",
    "form":"LLLLL",
    "status":"same",
    "description":"Relegation - Ligue 2",
    "all":{
    "played":32,
    "win":2,
    "draw":9,
    "lose":21,
    "goals":{
    "for":20,
    "against":56
    }
    },
    "home":{
    "played":16,
    "win":0,
    "draw":6,
    "lose":10,
    "goals":{
    "for":5,
    "against":22
    }
    },
    "away":{
    "played":16,
    "win":2,
    "draw":3,
    "lose":11,
    "goals":{
    "for":15,
    "against":34
    }
    },
    "update":"2021-04-16T00:00:00+00:00"
    }
    ]
    ]
    }
    );


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
