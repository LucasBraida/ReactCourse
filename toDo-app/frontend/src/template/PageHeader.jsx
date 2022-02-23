import React from "react"


export default function PageHeader(props){
    return(
        <header className="page-header">
            <h2>{props.title} <small>{props.subtitle}</small></h2>
        </header>
    )
}
