import PropTypes from 'prop-types'
import {useState} from "react"
import styles from "./Text.module.css";




function Info({dia, mes, ano}){
    const [name, setName] = useState()
    const [user, setUser] = useState()

    function changeName(e){
        setName(e.target.value)
    }
   
    function changeUser(e){
        e.preventDefault()
        setUser(name)
        console.log(name)
    }

    return(
        
        <div >
            <h1>{name}</h1>
            <h2>Hoje é {dia} do mês {mes} de {ano}</h2>
            <p className={styles.texto}>Desenvolvedor FullStack</p>
            <form >
                <input type="text" onChange={changeName}/>
                <button type="submit" onClick={changeUser}>enviar</button>
                {user && (        
                <div>
                <h1>Seu nome é {user}</h1>
                </div>
            )}
            </form>  
            
            
            
        </div>
    )
}

Info.propTypes = {
    dia: PropTypes.number.isRequired,
}
function User({nota}){
    return(
        <>
            <table border ="1" className={styles.ficha}>
                <tr>
                    <td>Nome</td>
                    <td>Ocupação</td>
                    <td>CR</td>
                    <td>Nota</td>
                </tr>
                <tr>
                    <td>João Victor</td>
                    <td>Bolsista IC</td>
                    <td>7,5</td>
                    <td>{nota}</td>
                </tr>
            </table>
            
                
        </>
    )
}


User.defaultProps = {
    nota: 0
}


const exportedUsuario = {Info, User};
   export default exportedUsuario