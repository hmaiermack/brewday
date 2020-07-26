export default (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                [action.payload[0]]: state[action.payload[0]].push(action.payload.value)
            }
        default: return state;
    }
}