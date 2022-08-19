export default function Button(props){
    return(
        <input 
            style={{marginTop:"25px"}}
            type="submit" 
            value={props.texto}/>
    )
}