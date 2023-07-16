import MovieList from "./MovieList"
import { useState,useEffect } from "react";
function Home() {
   const [data , setData]=useState([]);
   async function getTtrendingMovies() {
        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        const movies = await response.json();
        console.log(movies)
        setData(movies);
    }
    useEffect(()=>{
        getTtrendingMovies()
    },[])
    return(
        <>
        <p>Welcome in Home</p>
        <MovieList data={data} />
        </>
    )
}

export default Home