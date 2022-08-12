import Card from "../components/card";
import Header from "../components/header";
import TextForm from "../components/textForm";
import style from "../styles/main.module.css"
import navegadorStyle from "../styles/navegador.module.css"
import Navegador from "../components/navegador";

export default function Login() {
    return (
        <div className={style.main}>
            <Header subtitulo="Tela de Login" voltar={true} />
            <div className={style.body}>
                <Card>
                    <TextForm texto="Usuário" />
                    <TextForm texto="Senha" />

                    <div>
                        <Navegador
                            destino="/paginaTabela" texto="Entrar" tipo={navegadorStyle.navegadorMini}>
                        </Navegador>
                    </div>
                </Card>
            </div>
        </div>
    )
}