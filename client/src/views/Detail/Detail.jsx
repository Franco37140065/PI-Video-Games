import React from "react";
import {Link, useParams} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
import style from './Detail.module.css'
const Detail = (props)=>{
    const dispatch = useDispatch()
    const myGame = useSelector((state)=>state.detail)
    const {id} = useParams();

    useEffect(()=> {
        dispatch(getDetail(id))
    },[dispatch,id])
    console.log(myGame)


    return (
        <div className={style.Detail}>
            {myGame ?
            <div>
                <h1>{myGame.name}</h1>
                <img src={myGame.background_image} alt="image not fount" />
                
                <p>{myGame.description_raw}</p>
                <p>
              <strong>Rating</strong>: ★ {`${myGame.rating}`}
            </p>
            <p><strong>Genres</strong>: {!myGame.createInDb? myGame.genres + ' ': myGame.genres.map(e => e.name + (' '))}</p>
            <p><strong>Platforms</strong>: {myGame.platforms +', ' }</p>

            </div>:     <div className={style.loading}>
                     <a href="">
		                <img src=""  />
	                </a>
               
                </div>
            }
            <Link to = '/home'><button>Return</button></Link>

        </div>
    )
}

export default Detail;