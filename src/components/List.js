import Item from "./Item"

function List() {
    
    return(

        <> 
            <h1> MINHA LISTA </h1>
             <ul>                    
                <Item marca="ferrari" lancamento={2021} /> 
                <Item marca="GM" lancamento={2015} />
                <Item  /> 
                

              </ul>  
        

        </>
    )
}

export default List