import style from "../styles/card.module.css"

export default function Card(props) {
    return (
        <div className={style.card}>
                {props.children}
        </div>
    )
}