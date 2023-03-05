import React from "react";



const SearchBar =({handleInputChange,handleSubmit})=>{
   

    return (
        <div>
            <input 
            type='text' placeholder="Search Game..." 
            onChange = {(e) => handleInputChange(e)}/>

            <button type='submit'
            onClick = {(e) => handleSubmit(e)}>Search</button>

        </div>
    )
}

export default SearchBar;