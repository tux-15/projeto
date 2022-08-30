import style from "../styles/main.module.css"
import Header from "../components/header"
import Tabela from "../components/tabela"
import SelecionarOP from "../components/selecionarOP"

import authService from "../api/auth-service"
import TableService from '../api/table-service';

import axios from "axios"
const API_URL = "http://localhost:8080/api/";

export default function PaginaTabela({ activeLines }) {

    var state = {
        currentUser: undefined,
        isUser: false,
        isAdmin: false
    }

    const user = authService.getCurrentUser();

    if (user) {
        state.currentUser = user
    }

    const dados = [
        { "tipoTeste": 'Teste de torque', "valorMin": 1, "valorMax": 5.3 },
        { "tipoTeste": 'Teste de visão', "valorMin": 0, "valorMax": 1 },
        { "tipoTeste": 'Teste de temperatura', "valorMin": 50, "valorMax": 52 },
        { "tipoTeste": 'Teste de corrente', "valorMin": 4, "valorMax": 20 },
    ]

    return (
        <div>
            <Header subtitulo="Tabelas" voltar={true} />
            {state.currentUser ?
                <div className={style.main}>
                    {state.currentUser.roles.includes("ROLE_ADMIN") ?
                        <div className={style.body}>
                            <SelecionarOP></SelecionarOP>
                            <Tabela dados={dados}></Tabela>
                        </div>
                        : <>
                            <div className={style.body}>
                                <h2>
                                    Você precisa de permissão para acessar esta página.
                                </h2>
                            </div>
                        </>}
                </div>
                : <>
                    <div>
                        Por favor, faça login para acessar esta página.
                    </div></>
            }
        </div>
    )
}