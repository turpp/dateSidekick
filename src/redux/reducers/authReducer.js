

export const authReducer = (state={loggedIn: false, currentUser: {}, errorMessage: '', fetching: false}, action)=>{
    switch(action.type){
        case 'AUTH_SUCCESSFUL':
            return {
                ...state,
                 loggedIn: action.payload.loggedIn,
                  currentUser: action.payload.currentUser,
                  errorMessage: '',
                  fetching: false
                }
        case 'AUTH_FAILED':
            return{
                ...state,
                errorMessage: action.payload.errorMessage,
                fetching: false
            }
        case 'STARTING_FETCH':
            return{
                ...state,
                fetching: true
            }
            case 'LOGOUT':
                return {
                    ...state,
                    loggedIn: false,
                    currentUser: {}
                }
        default:
            return {
                ...state,
                fetching: false
            }
    }
}