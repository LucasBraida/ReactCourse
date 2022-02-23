import React from "react"
import {Router, Route, Redirect, hashHistory} from "react-router"
import About from "../about/About"
import Todo from "../todo/Todo"


export default function Routes(props){
    return(
        <Router history={hashHistory}>
            <Route path="/todos" component={Todo}></Route>
            <Route path="/about" component={About}></Route>
            <Redirect from="*" to="/todos"></Redirect>
        </Router>
    )
}
