export default function TextForm(props){
    return(
        <div style={{marginTop: "10px"}}>
            <div>
            {props.texto}
            </div>
            <input type="text"></input>
        </div>
    )
}