import "./styles.css"
export function ListOption(props){
    //props => onClick , title , content
    return(
        <div className="ListOption" onClick={props.onClick}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}