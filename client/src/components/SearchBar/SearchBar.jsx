import React from "react";
import style from './SearchBar.module.css'



const SearchBar =({handleInputChange,handleSubmit})=>{
   

    return (
        <div className={style.container}>
            <input 
            className={style.inputSearch}
            type='text' placeholder="Search Game..." 
            onChange = {(e) => handleInputChange(e)}/>{/*revisar como hacer si no encuentra nada que me renderize no se encontro el juego*/ }

            <button type='submit'
            onClick = {(e) => handleSubmit(e)} className={style.button}>Search</button>

        </div>
    )
}

export default SearchBar; 