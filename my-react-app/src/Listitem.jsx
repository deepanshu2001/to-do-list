import react, { useState } from "react"

function Listitem(props){
   
    return (
        <div onClick={()=>{
            props.onChecked(props.id)
        }}>
            <li >{props.txt}</li>
        </div>
        
    )
}

export default Listitem