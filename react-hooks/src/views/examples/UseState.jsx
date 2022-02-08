import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { DataContext } from "../../data/DataContext"
const UseState = (props) => {

    const context = useContext(DataContext)
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{context.state.text}</span>
            </div>
        </div>
    )
}

export default UseState
