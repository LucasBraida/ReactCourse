import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {DataContext} from "../../data/DataContext"
import { AppContext } from '../../data/Store'
import App from '../App'
const UseContext = (props) => {

    const context = useContext(DataContext)
    const appContext = useContext(AppContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <input type="text" className="input" value={context.state.text}
                onChange={ e=>context.setState(
                    prev =>{
                        const str = "text"
                        return {...prev, [str]: e.target.value}
                        }
                    )}/>
            </div>
            <div className="center">
                <span className="text">{appContext.text}</span>
                <input type="text" className="input" value={appContext.text}
                onChange={ e=> appContext.setText(e.target.value)}/>
            </div>

        </div>
    )
}

export default UseContext
