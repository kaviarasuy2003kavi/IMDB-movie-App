import React from 'react'
import { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import './Download.css'
 import { Spin } from 'antd';
import { useState } from 'react'
import { Button, Result } from 'antd'; 

const  Download = () => {
  
  
const data = useSelector((state)=>state )
 
      
 
const [isLoading, setIsLoading] = useState(true)
 
useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 2500)
}, []) 

 
 
useEffect(()=>{
  console.log(data  )
},[data])
  

  return (
      
    isLoading
    ?
    <div className="card" >  
          Downloading....  <Spin />    
    
    </div>       
    :   
    <div className='Download'> 
            <div className="tickets">
                            <div className="bookTicket">
                                 <div className="movie_img">
                                        <img className="movie__posterr" src={`https://image.tmdb.org/t/p/original${ data.SendData.movie.poster_path}`} />
                                 </div> 
                                <div className="movie_details"> 
                                            <div className="movie_Name"> Movie Name : <b>{data.SendData.movie.original_title}</b></div>
                                            <div className="movie_release"> Released Date :<b> {data.SendData.movie.release_date}</b></div>
                                            <div className="movie_tagline" >description : <b> {data.SendData.movie.overview.slice(0,200)+"..." }</b></div>
                                        <div className="genre">
                                                {
                                                data.SendData.movie &&  data.SendData.movie.genres
                                                ? 
                                                data.SendData.movie.genres.map(genre => (
                                                    <><span className="movie_genre"  >{genre.name}</span></>
                                                )) 
                                                : 
                                                ""
                                            } 
                                        </div>

                                          
                                        <Result
                                            style={{marginBottom:'110px', display:'flex' , gap:'17px',margin:' 20px 0px 0px 42%'}}
                                            status="success"
                                            title="Successfully Downloaded  !"
                                              
                                          />  
                                        
                                </div>
                           </div>
                             
                    </div>  
         </div>           
























 

    )
}

export default  Download