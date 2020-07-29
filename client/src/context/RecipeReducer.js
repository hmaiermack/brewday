export default (state, action) => {
    switch(action.type) {
        case 'FETCH_UPDATE':
            return{
                ...state,
                data: action.payload
            }
        case 'ADD_ITEM':
            //pass payload.target as string of key you want to modify, value as whatever
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.target]: [...state.data[action.payload.target], ...action.payload.value]
                }
            }
            case 'DELETE_ITEM':
                //filter target key of data where ith index of key equals value of item at key's payload index
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [action.payload.target]: state.data[action.payload.target].filter(item => 
                            item !== state.data[action.payload.target][action.payload.index])
                    }
                }
            case 'EDIT_ITEM':
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [action.payload.target]: action.payload.value
                    }
                }
        default: return state;
    }
}