function Forms() {
// colocar esse "e" abaixo para que se apareca a mensagem no console log, pois formulario deveria ser processado via ajax.
    function cadastrarUsuario(e){
        e.preventDefault()

        console.log(`cadastrou!!!`)
    }

    return(
        <div>
            <h1>Meu cadastro </h1>
            <form onSubmit={cadastrarUsuario}>
                <div> 
                    <input type="text" placeholder="Digite o seu nome" />
                </div>

                <div> 

                <input type="submit" value="Cadastrar" />

                </div>

            </form>


        </div>

    )

}

export default Forms