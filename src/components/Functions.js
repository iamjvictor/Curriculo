
function ShowList({itens}){
    return(
        <>
            {itens.map((item)=>(
                
                <p>{item}</p>
            ))}

        </>
    )
}

    const exportedFunction = {ShowList};
   export default exportedFunction