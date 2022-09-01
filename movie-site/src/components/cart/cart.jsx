import { useMovieContext } from "../../context/movieDataContext"
import { Avatar } from "../avatar/avatar";
import { CardButton } from "../cartButton/cartButton";
import './style.css'
export const Cart = () =>{
    const{getMovie} = useMovieContext();
    return(
        <div className="card-container">
            {getMovie.map(el => <Avatar cardImage={el.image}/>)}
            <div className="card-bottom-button">
                <CardButton/>
            </div>
        </div>
    )
}