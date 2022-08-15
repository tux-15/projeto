import style from "../styles/navegador.module.css"
const axios = require('axios');

export default function TextForm(props) {
    return (
        <div>
            <form action="http://localhost:3003/auth" method="post"
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
                    name="username"
                    placeholder=" "
                    id="username" required />

                <div style={{marginTop:"10px"}}>Senha</div>

                <label for="password"></label>

                <input type="password"
                    name="password"
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