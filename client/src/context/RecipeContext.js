import React, { useReducer } from 'react'
import RecipeReducer from './RecipeReducer'

const data = {
    name: "",
    description: "",
    gravity: [],
    ingredients: [],
    directions: [],
    notes: []
}

const initialState = {
    data,

}

const RecipeContext = React.createContext({
    initialState
})

export default RecipeContext

export const RecipeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RecipeReducer, initialState)
    
    function addItem(target, value){
        dispatch({
            type: 'ADD_ITEM',
            payload: {target, value}
        })
        console.log('data after add' + data)
    } 

    function fetchUpdate(data){
        dispatch({
            type:'FETCH_UPDATE',
            payload: data
        })
        console.log(data)
    }

    return (
        <RecipeContext.Provider value={{
            data: state.data,
            addItem,
            fetchUpdate
        }}>
            {children}
        </RecipeContext.Provider>
    )
}