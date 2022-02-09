import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { DataContext } from "../../data/DataContext"
import { AppContext } from '../../data/Store'
const UseState = (props) => {

    const context = useContext(DataContext)
    const appContext = useContext(AppContext)
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{context.state.text}</span>
            </div>
            <div className="center">
                <span className="text">{appContext.text}</span>
            </div>
        </div>
    )
}

export default UseState
