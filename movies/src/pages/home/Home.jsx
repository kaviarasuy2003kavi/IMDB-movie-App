import React, { useEffect, useState }  from 'react'
 import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import {Rate } from 'antd';
import MovieList from '../../components/movieslist/movieslist';
import { useSelector } from 'react-redux';
 
 
const Home = () => {
     
   const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data?.results))
        

     }, [])

    // console.log(popularMovies)
 

  return (
       <div className="poster">
                    <Carousel
                        autoPlay={true}
                        transitionTime={1}  
                        infiniteLoop={true}
                        showStatus={false}
                    >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="poster_Image">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="poster_title">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="poster_release">
                                        {movie ? movie.release_date : ""}
                                        <span className="poster_rating">
                                            {movie ? movie.vote_average :''}
                                             {<Rate disabled defaultValue={1} />}
                                        </span>
                                    </div>
                                    <div className="poster_description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>    
                <MovieList/>
        
    </div>
    
  )
}

export default Home