import {applyMiddleware, combineReducers, createStore} from "redux";
import   thunkMiddleware from 'redux-thunk'
import menuCategoryReducer from "./menuCategoryReducer";



let reducers = combineReducers({
  menuCategories: menuCategoryReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export  default  store;