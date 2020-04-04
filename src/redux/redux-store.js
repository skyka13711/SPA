import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk'
import searchReducer from "./search-reducer";
import historyReducer from "./search-history";


let reducers = combineReducers({
    searchResult: searchReducer,
    searchHistory: historyReducer,
   
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store