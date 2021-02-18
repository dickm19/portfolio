import { combineReducers } from "redux";

const defaultState = {
    test: true,
}


function testReducer(state = defaultState.test, action){
    switch(action.type){
        
        default:
            return state
    }
}
const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer