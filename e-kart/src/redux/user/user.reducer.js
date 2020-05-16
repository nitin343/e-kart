const INITIAL_STATE = {
  User: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state , 
                User: action.payload
            }

        default: 
        return state;
    }
};

export default userReducer;
