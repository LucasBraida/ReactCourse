import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer, actions} from "../../store"

const UseReducer = (props) => {
    const [state, dispatch]= useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.name ?
                    <span className="text">{state.name}</span>
                    :<span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={()=> actions.numberAdd2(dispatch)}>+2</button>
                    <button className="btn"
                    onClick={()=> actions.login(dispatch, "Marquinhos")}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
