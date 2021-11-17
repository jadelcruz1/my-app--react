function Evento() {

    function meuEvento(){
        console.log(`Uii, ativei`)
    }



    return(
        <div>
            <p>clique par disparar um evento </p>
            <button onClick={meuEvento}> Ativar</button>

        </div>
    )

}

export default Evento