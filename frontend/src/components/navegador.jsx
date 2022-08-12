import Link from "next/link"
import style from "../styles/navegador.module.css"

export default function Navegador(props){
    return(
        <div className={props.tipo}>
            <Link href={props.destino}>{props.texto}</Link>
        </div>
    )
}