import logo from './logo.svg';
import './App.css';
import usuario from './components/usuario'
import styles from './components/Text.module.css'
import functions from './components/Functions'



function App() {
  var dataAtual = new Date();
  const skills = ['Node.js', 'React', 'Javascript', 'Mysql']
  return (
    <div className={styles.body}>   
                 
        <img src={logo} className="App-logo" alt="logo" />
        <usuario.Info dia ={dataAtual.getDate()} mes ={dataAtual.getMonth()} ano = {dataAtual.getFullYear()}/>  
        <usuario.User nota = {8.2}/>     
        <h1>Minhas competencias: </h1> 
        <functions.ShowList itens={skills}/> 

             
    </div>
  );
}

export default App;
