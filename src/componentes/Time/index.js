import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props)=>{
    const css = {backgroundColor: props.corSecundaria} //primeira forma de fazer criando uma variavel que vai receber um objeto javascript
    return(
        <section className="time" style={css}> {/* Atribuindo essa variável que foi criada */}
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3> {/* Segunda forma de fazer, que é um estilo inline*/}
        <div className="colaboradores">
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
        </div>
        </section>
    )
}

export default Time