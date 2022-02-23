import React from "react"
import "modules/bootstrap/dist/css/bootstrap.min.css"
import "modules/font-awesome/css/font-awesome.min.css"
import Todo from "../todo/Todo"
import About from "../about/About"
import Menu from "../template/Menu"
import Routes from "./Routes"


export default function App(props){
    return(
        <div className="container">
            <Menu></Menu>
            <Routes></Routes>

        </div>
    )
}
