import React from "react"
import { useEffect, useState } from "react"
import style from './Form.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { getGenres, postGame } from "../../redux/actions"
import { Link,useHistory } from "react-router-dom"
const validate = (input) => {
    let errors = {};
    if (!input.name) {
        errors.name = 'Game Name is required';
    } else if (input.name.length < 4) {
        errors.name = 'Game Name must have at least 4 characters';
    }
    if (!input.description) {
        errors.description = 'Description is required';
    } else if (input.description.length < 8) {
        errors.description = 'Description must have at least 8 characters'
    }
    if (!input.rating) {
        errors.rating = 'Rating is required';
    } else if (!/^[1-5]$/.test(input.rating)) {
        errors.rating = 'Rating must be between 1 and 5';
    }
    return errors;
}

const Form = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const genres = useSelector((state)=> state.genres)

    const [errors,setErrors] = useState({})
    const [input, setInput] = useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:"",
        genres:[]
        
    })

useEffect(()=>{
    dispatch(getGenres())
 
},[])


const handleChange = (event) => {

    const property = event.target.name;    
    const value = event.target.value;
    
    setInput({...input,
        [property]:value
    })
    setErrors(validate({
        ...input,
        [property]:value
    }))

}

    const handleCheck= (e)=>{

    if (e.target.parentNode.parentNode.id === 'platforms') {
        if (e.target.checked) {
        setInput(prevState => ({
            ...prevState,
            platforms: input.platforms.concat(e.target.name)
        }))
    } else {
        setInput(prevState => ({
            ...prevState,
            platforms: input.platforms.filter(x => e.target.name !== x)
        }))
    }
    }
    if (e.target.type !== 'checkbox') {
    setInput(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
    }
    }
const handleSelect=(e)=>{
    setInput({
        ...input,
        genres:[...input.genres,e.target.value]
    })
}
const handleSubmit = (e) =>{
    e.preventDefault();
   // console.log(input)
    dispatch(postGame(input))
    alert('created complet')
    setInput({
        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:[],
        genres:[]
        
    })
history.push('/home')
}
    return(
        <div className={style.container} >

        <form onSubmit={handleSubmit} className={style.formContainer}>
        <h4><strong>Add a new video game</strong></h4>
            <label htmlFor="name"><strong>Name:</strong></label>
            <input type="text" 
                    name="name" 
                    placeholder="
                    Write a name..."
                    value={input.name} 
                    onChange={handleChange} 
                    className={errors.name && style.error}/>
                    <p>{errors.name}</p>
                    
         
            <label htmlFor="description"><strong>Description:</strong></label>
            <input type="text" 
                    name="description" 
                    placeholder="
                    Write a Description..."
                    value={input.description} 
                    onChange={handleChange}
                    className={errors.description && style.error}
               />
                 <p>{errors.description}</p>
           
            <label htmlFor="released"><strong>Released:</strong></label>
            <input type="date" 
                    name="released"                 
                    value={input.released} 
                    onChange={handleChange}
                    className={errors.released && style.error}/>
                     <p>{errors.released}</p>
            
            
            <label htmlFor="rating"><strong>Rating:</strong></label>
            <input type="number" 
                   name="rating" 
                   placeholder="Select a rating..."
                   value={input.rating} 
                   onChange={handleChange}
                   className={errors.rating && style.error}/>
                    <p>{errors.rating}</p>
            
        
            
            <label className="title-name"><strong>Select a Platforms:</strong></label>
                        <div id='platforms'>
                            <div>
                                <input name='PC' type="checkbox" id="PC" onChange={handleCheck} />
                                <label htmlFor="PC">PC.</label>
                            </div>
                            <div>
                                <input name='iOS' type="checkbox" id="iOS"onChange={handleCheck} />
                                <label htmlFor="iOS">iOS.</label>
                            </div>
                            <div>
                                <input name='Android' type="checkbox" id="Android" onChange={handleCheck}/>
                                <label htmlFor="Android">Android.</label>
                            </div>
                            <div>
                                <input name='macOS' type="checkbox" id="macOS" onChange={handleCheck}/>
                                <label htmlFor="macOS">macOS.</label>
                            </div>
                            <div>
                                <input name='PlayStation 2' type="checkbox" id="PlayStation 2"onChange={handleCheck} />
                                <label htmlFor="PlayStation 2">PlayStation 2.</label>
                            </div>
                            <div>
                                <input name='PlayStation 3' type="checkbox" id="PlayStation 3"onChange={handleCheck} />
                                <label htmlFor="PlayStation 3">PlayStation 3.</label>
                            </div>
                            <div>
                                <input name='PlayStation 4' type="checkbox" id="PlayStation 4"onChange={handleCheck} />
                                <label htmlFor="PlayStation 4">PlayStation 4.</label>
                            </div>
                            <div>
                                <input name='PlayStation 5' type="checkbox" id="PlayStation 5"onChange={handleCheck} />
                                <label htmlFor="PlayStation 5">PlayStation 5.</label>
                            </div>
                            <div>
                                <input name='Xbox One' type="checkbox" id="Xbox One" onChange={handleCheck}/>
                                <label htmlFor="Xbox One">Xbox One.</label>
                            </div>
                            <div>
                                <input name='PXbox 360' type="checkbox" id="Xbox 360" onChange={handleCheck}/>
                                <label htmlFor="Xbox 360">Xbox 360.</label>

                            </div>
                            <div>
                                <input name='Xbox Series S/X' type="checkbox" id="Xbox Series S/X" onChange={handleCheck}/>
                                <label htmlFor="Xbox Series S/X">Xbox Series S/X.</label>
                            </div>
                            <div>
                                <input name='PS Vita' type="checkbox" id="PS Vita" onChange={handleCheck}/>
                                <label htmlFor="PS Vita">PS Vita.</label>
                            </div>
                            <div>
                                <input name='Nintendo Switch' type="checkbox" id="Nintendo Switch" onChange={handleCheck}/>
                                <label htmlFor="Nintendo Switch">Nintendo Switch.</label>
                            </div>
                            <div>
                                <input name='Nintendo 3DS' type="checkbox" id="Nintendo 3DS" onChange={handleCheck}/>
                                <label htmlFor="Nintendo 3DS">Nintendo 3DS.</label>
                            </div>
                            <div>
                                <input name='Wii U' type="checkbox" id="Wii U" onChange={handleCheck}/>
                                <label htmlFor="Wii U">Wii U.</label>
                            </div>
                        </div>

                            <label htmlFor="Genres"><strong>Select a Genres</strong></label>

                        <select onChange={handleSelect}>
                            {genres.map((e) => (
                                <option value={e.name}>{e.name}</option>
                            ))}
                        </select>
                        <p> {input.genres.map(e=>e + " ,")}</p>
                      
                      
                        <div className={style.container_btn}>
                            <       button className={style.button} type='submit'>Create</button>
                                <Link to= '/home'>
                                    <button className={style.button}>Return</button>
                                </Link>
                        </div>
                      
           
        </form>
        </div>
    )
    
}
export default Form;