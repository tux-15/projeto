import style from "../styles/main.module.css"
import Header from "../components/header"
import Tabela from "../components/tabela"

export default function PaginaTabela(dados) {

    dados = [
        {"tipoTeste": 'Teste de torque', "valorMin": 1, "valorMax": 5.3},
        {"tipoTeste": 'Teste de visão', "valorMin": 0, "valorMax": 1},
        {"tipoTeste": 'Teste de temperatura', "valorMin": 50, "valorMax": 52},
        {"tipoTeste": 'Teste de corrente', "valorMin": 4, "valorMax": 20},
    ]

    return(
        <div className={style.main}>
                <Header subtitulo="Tabelas" voltar={true} />
                <div className={style.body}>
                    <Tabela dados={dados}></Tabela>
                </div>
        </div>
    )
}