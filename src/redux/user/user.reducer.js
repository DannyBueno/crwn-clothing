//Intial state object represents state of the reducer
const INITIAL_STATE = {
    currentUser: null
}


//Gets the state and action 
//state is a default value
const userReducer = (state = INITIAL_STATE, action) => {
     //if action.type is what we want, render something, else by default return the state
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
};

export default userReducer;
