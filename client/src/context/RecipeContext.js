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
    loading: false,
    items: []
}

const RecipeContext = React.createContext({
    initialState
})

export default RecipeContext

export const RecipeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RecipeReducer, initialState)
    

    //actions
    function newItem(item){
        fetch('http://localhost:5000/api/items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(item)
        })
        .then(res => {
            if(!res.ok) {
                throw new Error('404 not found')
             }
             return res.json()
        })
        .then(json => dispatch({
            type: 'CREATE_ITEM',
            payload: json
        }))
        .catch(err => {
            console.log(err);
            //if response is not ok redirect to /404
            history.push("/404")
        } )
    }

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

    function initialFetch(history){
        fetch(`http://localhost:5000/api/items/`)
        .then(res => {
            if(!res.ok) {
               throw new Error('404 not found')
            }
            return res.json()
        })
        .then(json => dispatch({
            type: 'INITIAL_FETCH',
            payload: json
        }))
        .catch(err => {
            console.log(err);
            //if response is not ok redirect to /404
            history.push("/404")
        } )

        console.log(state.items)
    }

    function getRecipe(id, history){
        setItemsLoading();
        fetch(`http://localhost:5000/api/items/${id}`)
        .then(res => {
            if(!res.ok) {
               throw new Error('404 not found')
            }
            return res.json()
        })
        .then(json => dispatch({
            type: 'GET_RECIPE',
            payload: { ...json, 
                date: json.date.substr(0,10),
                //sort by newest date first
                notes: json.notes.sort((a, b) => {
                    if(Date.parse(a.date) < Date.parse(b.date)){
                        return 1
                    }
                    else if(Date.parse(a.date) > Date.parse(b.date)) {
                        return -1
                    }
                    else { return 0 }
                })
            }
        }))
        .catch(err => {
            console.log(err);
            //if response is not ok redirect to /404
            history.push("/404")
        } )
    }

    function setItemsLoading(){
        dispatch({
            type: 'ITEMS_LOADING'
        })
    }

    return (
        <RecipeContext.Provider value={{
            data: state.data,
            items: state.items,
            loading: state.loading,
            newItem,
            addItem,
            initialFetch,
            deleteItem,
            editItem,
            setItemsLoading,
            getRecipe
        }}>
            {children}
        </RecipeContext.Provider>
    )
}