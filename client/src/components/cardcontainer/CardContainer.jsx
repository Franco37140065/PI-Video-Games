import Card from '../Card/Card';
import style from '../cardcontainer/CardContainer.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGames,getGenres } from '../../redux/actions';

const CardContainer = ({allGames}) =>{
    
    const dispatch = useDispatch();
  
    
    useEffect(()=>{
        dispatch(getGames(),getGenres());

    },[]);
    
     
    return(
      
        
            <div className={style.CardContainer}>

            {   
                allGames.length ? 
                allGames.map((game)=>{
                    return(
                        <Card
                        key={game.id}
                        name={game.name}
                        background_image={game.background_image}
                        released={game.released}
                        rating={game.rating}
                        platforms={game.platforms}
                        genres={game.genres.map(g => g.name)}
                        id={game.id}
                    />
                    
                    )
     
                }):               
                <div className={style.loading}>
                     <a href="">
		                <img src=""  />
	                </a>
               
                </div>
       }

             </div>
        
    )
}
export default CardContainer;