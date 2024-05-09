import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
 
const Header = () => {

 
  return (
    <div className='header'> 
            <div className="mainHeader">
              <Link to='/'>  <img className='img_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png' width={80}></img> </Link>  
               <Link to= '/movies/popular'> <span>Populor</span></Link>
               <Link to= '/movies/top_rated'> <span>Top Rated</span></Link>            
               <Link to= '/movies/upcoming'> <span>UpComming</span></Link>          
                  
            </div>
 
     </div>
                
  )
}

export default Header