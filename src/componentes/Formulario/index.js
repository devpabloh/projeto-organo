import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = ()=>{
    const times =[
        "Programação", "Front-End", "Data Science", "Devops", "Ux e Design", "Mobile", "Inovação e Gestão"
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    console.log(nome)
    console.log(cargo)
    console.log(imagem)

    const aoSalvar = (evento)=>{
        evento.preventDefault()
        console.log('form foi submetido')
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome..." valor={nome} aoAlterado={valor=>setNome(valor)}/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo..." valor={cargo} aoAlterado={valor => setCargo(valor)}/>
            <CampoTexto label="Imagem" placeholder="Digite o URL da imagem..." valor={imagem} aoAlterado={valor => setImagem(valor)}/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario