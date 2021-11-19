// componente criado para renderizar lista no app.js

function OutraLista ({ itens }) {

    return(

        <> 
        
            <h3> Lista de framework e bibliotecas a estudar:</h3>

            {itens.length > 0 ? (
                itens.map ((item, index) => (
                 <p key={index}> {item} </p>))): (
                <p> não há mais itens aqui.</p>
            )}
        
        </>

    )
}

export default OutraLista