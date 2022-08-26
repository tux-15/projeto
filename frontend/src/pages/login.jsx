import Card from "../components/card";
import Header from "../components/header";
import LoginForm from "../components/loginForm";
import style from "../styles/main.module.css"

export default function Login() {

    return (
        <div className={style.main}>
            <Header subtitulo="Tela de Login" voltar={true} />
            <div className={style.body}>
                <Card>
                    <LoginForm/>
                </Card>
            </div>
        </div>
    )
}