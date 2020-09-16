import React from 'react'

const Rate = ({rating,setRatSearch}) => {
    const starsConvertor=(x)=>{
        let starsArray =[]
        for(let i=1;i<=5;i++){
            if(i<=x){
                starsArray.push(<span onClick={()=>setRatSearch(i)}>★</span>);
            }
            else {starsArray.push(<span onClick={()=>setRatSearch(i)}>☆</span>)};
        }
        return starsArray;
    }
    return (
        <div>
            {starsConvertor(rating)}
        </div>
    )
}

export default Rate
