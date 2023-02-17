import CardContainer from '../../components/cardcontainer/CardContainer';
import style from '../Home/Home.module.css'


const Home =(props)=> {
    return(
        <div className={style.Home}>
        <h1>Este es el Home</h1>
        <h3>Esta es mi pagina</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolore consectetur odit quis nisi non, architecto modi esse ullam tempore ab harum sapiente. Esse optio eaque placeat ipsa, voluptas officia!</p>
        
            <CardContainer/>
      
        </div>
    )
}

export default Home;