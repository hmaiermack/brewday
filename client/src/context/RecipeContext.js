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
    

    //actions
    function addItem(target, value){
        dispatch({
            type: 'ADD_ITEM',
            payload: {target, value}
        })
    } 

    function deleteItem(target, index){
        dispatch({
            type: 'DELETE_ITEM',
            payload: {target, index}
        })
    } 

    function editItem(target, value){
        dispatch({
            type: 'EDIT_ITEM',
            payload: {target, value}
        })
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
            fetchUpdate,
            deleteItem,
            editItem
        }}>
            {children}
        </RecipeContext.Provider>
    )
}