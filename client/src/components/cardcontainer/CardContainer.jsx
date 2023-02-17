import Card from '../Card/Card';
import style from '../cardcontainer/CardContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGames } from '../../redux/actions';


const CardContainer = () =>{
    const games = useSelector((state)=> state.games);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getGames());
    return ()=>{
        console.log("se desmonta")
    }},
    []);

    return(
        <div className={style.CardContainer}>

            {
                games.map((game)=>{
                    return(
                    <Card
                        name={game.name}
                        background_image={game.background_image}
                        released={game.released}
                        rating={game.rating}
                        platforms={game.platforms}
                        genre={game.Genres}
                    />
                    )
                })
            }

        </div>
    )
}
export default CardContainer;