import functions from '../Events/Functions'
import styles from './Aside.module.css'
import{DiJavascript, DiMysql, DiNodejs, DiReact} from 'react-icons/di'



const skills = [' Node.js','React', 'Javascript', 'Mysql']
const icons = [DiNodejs, DiReact, DiJavascript, DiMysql]

function competencias(){
    return(
        <aside className= {styles.comp}>
        <h2>Minhas tecnologias: </h2>
        <functions.ShowIcon icon ={icons}/><functions.ShowList itens={skills}/>
        </aside>
    )
}


 
export default competencias