import styles from './SayMyName.module.css'

function SayMyName({ nome, idade, cor, altura}){
    return(
        <div>
            
            estudando props simples
            <p> nome:{nome} </p>
            <p className={ styles.teste}> Idade:{idade} </p>
            <p className={ styles.teste2}> Cor:{cor} </p>
            <p> Altura:{altura} </p>

    </div>
    )
}

export default SayMyName

