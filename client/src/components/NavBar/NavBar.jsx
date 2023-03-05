import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const  NavBar=  ({handleClick}) =>{
   

    return (
        <div className={style.buttonub} >
                <div className={style.position}>
                    <NavLink to="/"><button className={style.button}>Intro</button></NavLink>
                </div>
                <div className={style.position2}>
                   <button className={style.button} onClick={e => {handleClick(e)}}>Reload Videogames</button>
                </div>
                <div className={style.position3}>
                    <NavLink to="/creategame"><button className={style.button}>Create Game</button></NavLink>
                </div>
        </div>
    )
}

export default NavBar
