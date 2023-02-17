import './App.css';
import { Route } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About';

function App() {
  return (
      
    <div className="App">
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/about" component = {About}/>
    </div>
    
  );
}

export default App;
