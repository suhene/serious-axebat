import { createContext, useContext, useState } from "react";
import movieData from '../json/movies.json'


const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const {children} = props;
    const [getMovie,setMovie] = useState(movieData);
    return(
        <MovieContext.Provider value ={{getMovie,setMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext);