import style from './Card.module.css'



const Card = ({name,background_image,released,rating,platforms,Genres})=>{
    return(
        <div className={style.card}>

            <h4>name: {name}</h4>
            <p>background_image: {background_image}</p>
            <p>released: {released}</p>
            <p>rating: {rating}</p>
            <p>platforms:{platforms} </p>
            <p>genre:{Genres} </p>
        
        </div>
    )
}
export default Card;