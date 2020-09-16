import React from 'react'
import MoviesCard from './MoviesCard/MoviesCard'
const MoviesListe = ({moviesListe,nameSearch,ratSearch}) => {
    return (
        <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
            {moviesListe
            .filter((movie)=>movie.name.toLowerCase()
            .includes(nameSearch.toLowerCase().trim())&&
             movie.rating>=ratSearch)
            .map((movie)=>(<MoviesCard key={movie.id} movie={movie}/>))}
        </div>
    )
}

export default MoviesListe
