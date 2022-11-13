import logo from './logo.svg';
import './App.css';
import Competencias from './components/layout/Competencias'
import Footer from './components/layout/Footer'
import style from './components/layout/Aside.module.css'



function App() { 
  return (
    <div className={style.body}>    
        <p>Teste</p>                
        <img src={logo} className="App-logo" alt="logo" />
        <Competencias/> 
        <Footer/>
    </div>    
  );
}

export default App;
