import { useState } from "react"
import "./styles.css"
export default function CheckBox(props){
    //nessesary props => on_activate_onclick , on_deactivate_onclick
    //unnessesary props => style
    const [checked_state,trigger_checked_state] = useState(false)
    //add default value support with optional props
    const onclick_handler = ()=>{
        //check for problem like problem for bind func which we have in class components 
        trigger_checked_state(!checked_state)
        if(!checked_state == true){
            props.on_activate_onclick()
        }else{
            props.on_deactivate_onclick() 
        }
    }
    return(
        <div 
        style={typeof props.style == "undefined" ? {}:props.style} 
        className={"CheckBox " + (checked_state ? "checked_checkbox":"")}
        onClick={onclick_handler}></div>
    )
}