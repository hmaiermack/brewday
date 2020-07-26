import React, { useReducer } from 'react'
import RecipeReducer from './RecipeReducer'

const recipe = {
    name: "",
    description: "",
    gravity: [],
    ingredients: [],
    directions: [],
    notes: []
}

const initialState = {
    recipe,

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
            payload: [target, value]
        })
    } 

    return (
        <RecipeContext.Provider value={{
            recipe: state.recipe
        }}>
            {children}
        </RecipeContext.Provider>
    )
}