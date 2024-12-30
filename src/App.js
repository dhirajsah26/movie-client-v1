
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './component/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import Reviews from './component/reviews/Reviews';
// import NotFound from './components/notFound/NotFound';


function App() {
  const [movies,setMovies] = useState();

  const [movie, setMovie] = useState();

  const [reviews, setReviews] =useState();


  const getMovies = async () =>{
    try{

     
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    }catch(err){
      console.log(err)
    }
   
  }

  const getMovieData = async (movieId) =>{
    try{
      console.log('--------------')
      const response = await api.get(`/api/v1/movies/imdbId/${movieId}`);
      console.log(movieId)
      const singleMovie = response.data;
      console.log('..............',singleMovie)

      setMovie(singleMovie);
      
      setReviews(singleMovie.reviews);


    }
    catch(error){

      console.log(error)
    }
  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element= {<Home movies={movies}/>}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
        
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData = {getMovieData} movie= {movie} reviews={reviews} setReviews = {setReviews}/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
