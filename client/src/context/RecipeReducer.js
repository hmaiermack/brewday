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
                    [action.payload.target]: [action.payload.value, ...state.data[action.payload.target]]
                }
            }
        default: return state;
    }
}