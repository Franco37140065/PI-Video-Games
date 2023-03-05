import React from "react"
import { useEffect, useState } from "react"
import style from './Form.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { getGenres, postGame } from "../../redux/actions"
import { Link,useHistory } from "react-router-dom"

const Form = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const genres = useSelector((state)=> state.genres)

    const [input, setInput] = useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:"",
        genres:[]
        
    })
    const [error,setErrors] = useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        genres:[]
})

useEffect(()=>{
    dispatch(getGenres())
    validate();
},[input])

const validate = () =>{

    if( input.name){
        setErrors({
            ...error,
            name:''
        })
    }else{
        setErrors({
            ...error,
            name:'Name is required'
        })
    }
  }
const handleChange = (event) => {

    const property = event.target.name;    
    const value = event.target.value;
    
    setInput({...input,
        [property]:value
    })

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
    console.log(input)
    dispatch(postGame(input))
    alert('created complet')
    setInput({
        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:"",
        genres:[]
        
    })
history.push('/home')
}
    return(
        <div className={style.forms}>
            <Link to= '/home'><button>
Return</button></Link>
        <form onSubmit={handleSubmit} className={style.form}>
            <ul>
                <li>
            <label htmlFor="name">Name: </label>
            <input type="text" 
                    name="name" 
                    value={input.name} 
                    onChange={handleChange} 
                    className={error.name && style.error}/>
                    <span>{error.name && error.name}</span>
                    
                </li>
                <li>
            <label htmlFor="description">Description: </label>
            <input type="text" 
                    name="description" 
                    value={input.description} 
                    onChange={handleChange}
                    className={error.description && style.error}/>
            </li>
            <li>
            <label htmlFor="released">Released: </label>
            <input type="text" 
                    name="released" 
                    value={input.released} 
                    onChange={handleChange}
                    className={error.released && style.error}/>
            </li>
            <li>
            <label htmlFor="rating">Rating: </label>
            <input type="text" 
                   name="rating" 
                   value={input.rating} 
                   onChange={handleChange}
                   className={error.rating && style.error}/>
            </li>
        
            <br />
            <label className="title-name"><strong>Platforms: </strong> </label>
                        <div id='platforms' className="plat-div">
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
                                <input name='PlayStation 4' type="checkbox" id="PlayStation 4"onChange={handleCheck} />
                                <label htmlFor="PlayStation 4">PlayStation 4.</label>
                            </div>
                            <div>
                                <input name='PlayStation 5' type="checkbox" id="PlayStation 5"onChange={handleCheck} />
                                <label htmlFor="PlayStation 5">PlayStation 5.</label>
                            </div>
                            <div>
                                <input name='XBOX' type="checkbox" id="XBOX" onChange={handleCheck}/>
                                <label htmlFor="XBOX">XBOX.</label>
                            </div>
                            <div>
                                <input name='PS Vita' type="checkbox" id="PS Vita" onChange={handleCheck}/>
                                <label htmlFor="PS Vita">PS Vita.</label>
                            </div>

                            </div>

                        <select onChange={handleSelect}>
                            {genres.map((e) => (
                                <option value={e.name}>{e.name}</option>
                            ))}
                        </select>
                        <ul><li>{input.genres.map(e=>e + " ,")}</li></ul>
                        <br />
                        <div className="div-but-form">
                        <button type='submit'>Create</button>
                        </div>
                        </ul>
           
        </form>
        </div>
    )
    
}
export default Form;