import React from "react"
import "modules/bootstrap/dist/css/bootstrap.min.css"
import "modules/font-awesome/css/font-awesome.min.css"
import Todo from "../todo/Todo"
import About from "../about/About"
import Menu from "../template/Menu"


export default function App(props){
    return(
        <div className="container">
            <Menu></Menu>
            <Todo></Todo>
            <About></About>

        </div>
    )
}
