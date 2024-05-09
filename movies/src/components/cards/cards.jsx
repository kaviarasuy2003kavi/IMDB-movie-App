 
 import React, {useEffect, useState} from "react"
 import "./cards.css"
 import { Link, useNavigate } from "react-router-dom"
 import { Rate,Button , Input} from 'antd'
  import { Skeleton } from 'antd';
   
 
 const Cards = ({movie}) => {
      
 
     const [isLoading, setIsLoading] = useState(true)
 
     useEffect(() => {
         setTimeout(() => {
             setIsLoading(false)
         }, 1500)
     }, []) 
  
    

     return <>
      { 
     
         isLoading
         ?
         <div className="cards" >  
               <Skeleton  active  />
         </div>       
        :
        <div>
                <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                    <div className="cards"> 
                        <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                        <div className="cards_details">
                            <div className="card_title">{movie?movie.original_title:""}</div>
                            <div className="card_rating">
                                {movie?movie.release_date:""}
                                <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" />{<Rate disabled defaultValue={1}/>}</span>
                            </div>
                            <div className="card_description">{movie ? movie.overview.slice(0,100)+"..." : ""}</div> 
                             
                        </div>
                    </div>
                </Link> 
                
 
         </div>      

  }  
     </>
 }
 
 export default Cards