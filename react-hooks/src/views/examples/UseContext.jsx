import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {DataContext} from "../../data/DataContext"
const UseContext = (props) => {

    const context = useContext(DataContext)
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

        </div>
    )
}

export default UseContext
