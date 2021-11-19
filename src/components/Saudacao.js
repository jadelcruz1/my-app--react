// componente criado para a utilização de State Lift. juntamente com o componente SeuNome.js utilizado no APP.js

function Saudacao({nome}){

    function gerarSaudacao(algumNome){

        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        <> 
       {nome && <p> {gerarSaudacao (nome)}</p>}

        </> 

    ) 
}

export default Saudacao