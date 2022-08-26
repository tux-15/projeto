import tabelaStyle from "../styles/tabela.module.css"

//dados virão do back-end

function gerarHeaderTabela() {
    return (
        <tr>
            <th>Teste</th>
            <th>Valor Mínimo</th>
            <th>Valor Máximo</th>
        </tr>
    )
}

export default function Tabela(props) {

    function renderizarDadosTabela() {
        return props.dados?.map((rows, i) => {
            return (
                <tr key={rows.tipoTeste}
                //className={`${i % 2 === 0 ? style={backgroundColor:"pink"} : style={backgroundColor:"green"}}`}>
                >
                    <td>{rows.tipoTeste}</td>
                    <td>{rows.valorMin}</td>
                    <td>{rows.valorMax}</td>
                </tr>
            )
        })
    }

    return (
        <table className={tabelaStyle.tabela}>

            <thead className={tabelaStyle.head}>
                {gerarHeaderTabela()}
            </thead>

            <tbody className={tabelaStyle.body}>
                {renderizarDadosTabela()}
            </tbody>
        </table>
    )
}