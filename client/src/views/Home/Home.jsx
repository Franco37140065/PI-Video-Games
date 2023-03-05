import CardContainer from '../../components/cardcontainer/CardContainer';
import style from '../Home/Home.module.css'
import { useDispatch,useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import FilterBy from '../../components/FilterBy/FilterBy';
import { useState } from "react";
import Paginated from '../../components/Paginated/Paginated';
import OrderBy from '../../components/OrderBy/OrderBy';
import { orderBy, orderByRating,getNameGame } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getGames } from '../../redux/actions';


const Home =(props)=> {


const allGames = useSelector((state)=> state.games);
const [name,setName] = useState('');
const [order, setOrder] = useState('')
const [currentPage,setCurrentPage] = useState(1)
const [gamesPerPage,setGamesPerPage] = useState(15)
const indexOfLastGame = currentPage * gamesPerPage //15
const indexOfFirstGme = indexOfLastGame - gamesPerPage //0
const currentGames = allGames.slice(indexOfFirstGme,indexOfLastGame);//marcamos estados locales y le pasamos la cantidad de estados locales que queremos que se vea y lo cortamos con el metodo slice
const dispatch = useDispatch();   
const paginado = (pageNumber)=> {//le paso el numero de paginas
    setCurrentPage(pageNumber)   
}

const  handleSort = (e) => {
    e.preventDefault();
    dispatch(orderBy(e.target.value)) 
    setCurrentPage(1)
    setGamesPerPage(15)
    setOrder(e.target.value)
}
const  handleSortRating = (e) => {
    e.preventDefault();
    dispatch(orderByRating(e.target.value)) 
    setCurrentPage(1)
    setGamesPerPage(15)
    setOrder(e.target.value)
}

const handleInputChange = (e) =>{
e.preventDefault();
setName(e.target.value)
console.log(name)
}

const handleSubmit = (e) =>{
e.preventDefault();
dispatch(getNameGame(name));
setName("");
}
const handleClick =(e)=>{
    e.preventDefault();
    dispatch(getGames())
    setCurrentPage(1)
}


    return(<div>
                <div className={style.head}>
       
                    <NavBar handleClick={handleClick}/>
                    <FilterBy/>
                    <OrderBy handleSort= {handleSort}
                    handleSortRating={handleSortRating}/>
                    <SearchBar handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit} />
                    <Paginated
                    gamesPerPage={gamesPerPage}
                    allGames={allGames.length}
                    paginado={paginado}/>
                </div>
        
            <div className={style.Home}>
             <CardContainer allGames={currentGames}/>
      
            </div>
        </div>
    )
}

export default Home;