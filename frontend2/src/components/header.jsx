import Link from "next/dist/client/link"
import style from "../styles/main.module.css"

export default function Header(props) {
    return (
        <div className={style.header}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>
                    Sistema de atualização de tabelas
                </h1>
                <h1 className={style.headerLogo}>Visteon</h1>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>
                    {props.subtitulo}
                </h2>
                {props.voltar ?
                    <h2 className={style.headerButton}>
                        <Link href="/">Página inicial</Link>
                    </h2>
                    : <></>
                }
            </div>
        </div>
    )
}