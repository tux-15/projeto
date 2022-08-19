export default function SelecionarOP() {
    return (
        <div style={{
            display: "flex", justifyContent: "center",
            alignItems: "center", flexDirection: "column",
            marginBottom: "5vh",
        }}>
            <h2>Escolha uma linha e operação</h2>
            <div>
                <form>
                    <select>
                        <option>GM</option>
                        <option>SMART</option>
                        <option>REGIO</option>
                        <option>MIB1</option>
                    </select>
                    <select>
                        <option>OP10</option>
                        <option>OP30</option>
                        <option>OP50</option>
                        <option>OP110</option>
                    </select>
                </form>
            </div>

        </div>
    )
}