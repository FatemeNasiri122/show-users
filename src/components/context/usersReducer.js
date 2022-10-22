const usersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
            }
        case 'UPDATE_USERS':
            return {
                ...state,
                users: action.payload,
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}

export default usersReducer
