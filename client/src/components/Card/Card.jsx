import style from './Card.module.css'
import React from 'react';
//import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
//import Detail from '../../views/Detail/Detail';



const Card = ({name,background_image,rating,genres,id})=>{

    return(
        <div className={style.card}>
   

            <h4>{name}</h4>
            <img className={style.image} src={background_image} alt="image not fount" />
    
            <p>★ {rating}</p>
            
            <div className={style.infoContGenres}>
            <p> {genres+' '}{/*revisar el post por que cuando creo un juego nuevo se rompe en los generos */}
            </p>
              </div>
        <div>
          <Link to = {`/home/${id}`}><button >Details</button></Link></div>
        </div>
    )
  }
export default Card;