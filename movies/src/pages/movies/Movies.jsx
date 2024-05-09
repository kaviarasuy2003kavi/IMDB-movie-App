
import React, {useEffect, useState} from "react"
import "./Movies.css"
import { Link, useNavigate, useParams } from "react-router-dom"
 import {useDispatch} from 'react-redux';
import { Button, message, Space } from 'antd';
  

const Movie = () => {
    const [ Name, setName] = useState([''])
    const [messageApi, contextHolder] = message.useMessage();

   const dispatch = useDispatch()
   
   
   function change(){
      dispatch({
        type : 'SEND_DATA', 
        data : { movie : currentMovieDetail }

      })
   }


   const success = () => {
    messageApi.open({
      type: 'success',
      content: 'download started',
    });
  };


  


  
 
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

 
  

    return (
        
        <div className="movie">
            {contextHolder}
            <div className="movie_intro">
                <img className="movie_backup" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie_detail">
                <div className="movie_details">
                    <div className="movie_posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailss">
                    <div className="movie__detailssTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie_Count">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie_Date">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre">{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsis">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                     </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>

                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage}   style={{textDecoration: "none"}}><p><span className="movie_home movie_Button">Homepage <i className="newTab  "></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdb movie_Button">IMDb<i className="newTab  "></i></span></p></a>
                }


                
            </div>
            <div className="dowload">Download Now</div>
            
                    <div className="tickets">
                            <div className="bookTicket">
                                 <div className="movie_img">
                                        <img className="movie__posterr" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                                 </div> 
                                <div className="movie_details"> 
                                            <div className="movie_Name"> Movie Name : <b>{currentMovieDetail ? currentMovieDetail.original_title : ""}</b></div>
                                            <div className="movie_release"> Released Date :<b> {currentMovieDetail ? currentMovieDetail.release_date : ""}</b></div>
                                            <div className="movie_tagline" >description : <b> {currentMovieDetail ? currentMovieDetail.overview.slice(0,200)+"..." : ""}</b></div>
                                        <div className="genre">
                                                {
                                                currentMovieDetail && currentMovieDetail.genres
                                                ? 
                                                currentMovieDetail.genres.map(genre => (
                                                    <><span className="movie_genre"  >{genre.name}</span></>
                                                )) 
                                                : 
                                                ""
                                            }
                                        </div>
                                      
                                        <div  className="button">
                                                <Button onClick={success}>Download</Button>
                                                <Button onClick={()=>change()}><Link to='/loginpage'>view Download</Link></Button>
                                        </div>
                                </div>
                           </div>
                             
                    </div>

           
        </div>
    )
}

export default Movie
