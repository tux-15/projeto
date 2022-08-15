import style from "../styles/navegador.module.css"

export default function TextForm(props) {
    return (
        <div>
            <form action="/auth" method="post"
                style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "center",
                }}>

                <div>Usuário</div>

                <label for="username"></label>

                <input type="text"
                    name="Usuário"
                    placeholder=" "
                    id="username" required />

                <div style={{marginTop:"10px"}}>Senha</div>

                <label for="password"></label>

                <input type="password"
                    name="Senha"
                    placeholder="Digite sua senha"
                    id="password" required />

                <div>
                    <input className={style.submitButton}
                        type="submit" value="Entrar" />
                </div>
                {/* <Navegador 
                    destino="/paginaTabela" 
                    texto="Entrar" 
                    tipo={style.navegadorMini}>
                    </Navegador> */}
            </form>
        </div>
    )
}