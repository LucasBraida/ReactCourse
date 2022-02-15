import React from "react"

export default function Menu(props) {
    return (
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href='#'>
                        <i className="fa fa-calendar-check-o"></i> ToDo App
                    </a>
                </div>
                <div>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#/todos">Tarefas</a>
                        </li>
                        <li>
                            <a href="#/about">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
