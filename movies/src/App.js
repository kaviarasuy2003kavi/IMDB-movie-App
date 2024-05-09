 import './App.css';
import Header from './components/Header/Header';
import {  Router , Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home';
import MovieList from './components/movieslist/movieslist';
import Movie from './pages/movies/Movies';
 import Download from './pages/Download/Download';
   

function App() {

   return (
    <div>
     
     <Header/>
    <Routes>
          <Route index element={<Home/>} />
          <Route path='movie/:id' element={<Movie/> } />
          <Route path='movies/:type' element={<MovieList/> } />
          <Route path='/Loginpage' element={<Download/>} />
 

      
    </Routes>
 
    </div>
  );
}

export default App;
