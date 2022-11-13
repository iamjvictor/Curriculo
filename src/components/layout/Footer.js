import {FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'



function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.footer_icons}>
                <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joaov-10/">
                <FaLinkedin/>
                    
                </a>    
                </li>
            
                <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/iamjvictor">
                    <FaGithub/>
                </a>    
                </li>
            </ul>
        </footer>
    )
}

export default Footer