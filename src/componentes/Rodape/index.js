import "./Rodape.css"

const Rodape = ()=>{
    return(
        <footer className="footer">
            <section>
                <ul>
                    <li><a href="https://www.instagram.com/devpabloh/"><img src="./imagens/fb.png" alt="" /></a></li>
                    <li><a href="https://www.instagram.com/devpabloh/"><img src="./imagens/tw.png" alt="" /></a></li>
                    <li><a href="https://www.instagram.com/devpabloh/"><img src="./imagens/ig.png" alt="" /></a></li>
                </ul>
            </section>
            <section>
                <img src="./imagens/logo.png" alt="" />
            </section>
            <section>
                <p>Desenvolvido por Dev. Pablo H.</p>
            </section>
        </footer>
    )
}

export default Rodape