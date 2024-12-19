
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './component/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';


function App() {
  const [movies,setMovies] = useState();
  const getMovies = async () =>{
    try{

     
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    }catch(err){
      console.log(err)
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

        </Route>
      </Routes>
    </div>
  );
}

export default App;
