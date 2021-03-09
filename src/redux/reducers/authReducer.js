export default (state={loggedIn: false, currentUser: {}, errorMessage: ''}, action)=>{
    switch(action.type){
        case 'AUTH_SUCCESSFUL':
            return {
                ...state,
                 loggedIn: action.payload.loggedIn,
                  currentUser: action.payload.currentUser,
                  errorMessage: ''
                }
        case 'AUTH_FAILED':
            return{
                ...state,
                errorMessage: action.payload.errorMessage
            }
            case 'LOGOUT':
                return {
                    ...state,
                    loggedIn: false,
                    currentUser: {}
                }
        default:
            return state
    }
}