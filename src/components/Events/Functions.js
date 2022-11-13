import {Link} from 'react-router-dom'


function ShowList({itens}){
   
    return(       
        <>
            {itens.map((item)=>(
                <ul>                    
                        <li > {item} </li>
                    
                </ul>  
            ))}

        </>
    )
}

function ShowIcon({icon}){
   
    return(       
        <>
            {icon.map((icon)=>(
                <icon/>
                
            ))}

        </>
        
    )
}


function CriaLink(props){
    return(
        
            <Link to={props.link}>{props.text}</Link>
            

    )

}


    const exportedFunction = {ShowList, CriaLink, ShowIcon};
   export default exportedFunction