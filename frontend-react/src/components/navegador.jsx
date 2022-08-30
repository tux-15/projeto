import { Link } from "react-router-dom"
// import style from "../styles/navegador.module.css"

export default function Navegador(props){
    return(
        <div className={props.tipo}>
            <Link to={props.destino}>{props.texto}</Link>
        </div>  
    )
}