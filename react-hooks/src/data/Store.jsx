import React, { useState } from "react"

const initialState = {
    number: 1234,
    text: "Context API it's fun"
}

export const AppContext = React.createContext(initialState)
const Store = props =>{
    const [state, setState] = useState(initialState)

    function updateState(key, value){
        setState({
            ...state,
            [key]: value
        })
    }
    return (
        <AppContext.Provider value={{
            number: state.number,
            setNumber: (value) => updateState("number", value),
            text: state.text,
            setText: (value) => updateState("text", value)
        }}>
            {props.children}
        </AppContext.Provider>

    )
}

export default Store
