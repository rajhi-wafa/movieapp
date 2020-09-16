import React from 'react';
import Rate from '../Rate'


const searchMovie = ({setNameSearch,ratSearch,setRatSearch}) => {
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="type movie name search" onChange={(e)=>setNameSearch(e.target.value)}/>
                <div className="rating-search">
                    <Rate rating={ratSearch} setRatSearch={setRatSearch}/>
                </div>

            </div>
            
        </div>
    )
}

export default searchMovie
