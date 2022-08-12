import Header from "../components/header";
import style from "../styles/main.module.css"
import Navegador from "../components/navegador";
import navegadorStyle from "../styles/navegador.module.css"

export default function () {
    return (
        <div className={style.main}>
            <Header subtitulo="Página principal" voltar={false}></Header>
            <div className={style.body}>
                <Navegador tipo={navegadorStyle.navegador} texto="Modificar tabelas" destino="/login"/>
                <Navegador tipo={navegadorStyle.navegador} texto="Visualizar tabelas" destino="/visualizar"/>
            </div>
        </div>
    )
}