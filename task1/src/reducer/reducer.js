import { combineReducers } from "redux";

const initialState = {
    name : ''
};

const changeName = (state = initialState, action)=>{
    switch (action.type){
        case 'CNAME':
            return {
                ...state,
                name: action.payload
            };
            default:
                return state;
    }
}

const reducer = combineReducers({
    changeName
})

export default reducer;



