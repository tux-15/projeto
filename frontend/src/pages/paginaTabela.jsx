import style from "../styles/main.module.css"
import Header from "../components/header"
import Tabela from "../components/tabela"
import SelecionarOP from "../components/selecionarOP"
import { AuthConsumer } from 'react-check-auth';
import { AuthProvider } from 'react-check-auth';

export default function PaginaTabela(dados) {

    const authEndpoint = 'http://localhost:3003/auth/check/';
    const reqOptions = {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
        }
    };

    dados = [
        { "tipoTeste": 'Teste de torque', "valorMin": 1, "valorMax": 5.3 },
        { "tipoTeste": 'Teste de visão', "valorMin": 0, "valorMax": 1 },
        { "tipoTeste": 'Teste de temperatura', "valorMin": 50, "valorMax": 52 },
        { "tipoTeste": 'Teste de corrente', "valorMin": 4, "valorMax": 20 },
    ]


    return (
        <AuthProvider authUrl={authEndpoint} reqOptions={reqOptions}>
            <AuthConsumer>
                {({ userInfo, isLoading, error }) => (
                    // console.log(userInfo),
                    userInfo ?
                        (
                            <div>
                                <Header subtitulo="Tabelas" voltar={true} />
                                <div className={style.main}>
                                    <span>Hi {userInfo.username}</span>
                                    <div className={style.body}>
                                        <SelecionarOP></SelecionarOP>
                                        <Tabela dados={dados}></Tabela>
                                    </div>
                                </div>
                            </div>
                        ) :
                        <h1>Não logado</h1>
                )}
            </AuthConsumer>
        </AuthProvider>
    )
}