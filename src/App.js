import React,{ useState } from 'react';
import {moviesData} from './Components/MoviesData';

import SearchMovie from'./Components/SearchMovie/SearchMovie';
import MoviesListe from './Components/MoviesListe';
import AddMovie from './Components/AddMovie/AddMovie';

import'./App.css'

function App() {
  const[moviesListe,setMoviesListe]=useState(moviesData);
  const[nameSearch,setNameSearch]=useState('');
  const[ratSearch,setRatSearch]=useState(1)

  const addNewMovie = (e,newMovie)=>{e.preventDefault();
    setMoviesListe([...moviesListe,newMovie])

  };
  return (
    <div className="App">
      <SearchMovie
       setNameSearch={setNameSearch} 
      ratSearch={ratSearch} 
      setRatSearch={setRatSearch}
      />

     <MoviesListe
      moviesListe={moviesListe}
      nameSearch={nameSearch}
      ratSearch={ratSearch}
      />
     <div style={{display:'flex',justifyContent:'center'}}>
     <AddMovie addNewMovie={addNewMovie} />
     </div>
    </div>
  );
}

export default App;
