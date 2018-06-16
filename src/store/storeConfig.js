import {createStore, combineReducers} from "redux";
import optionsReducer  from "../reducers/optionsReduser";
import filterReducer from "../reducers/filterReducer";
import optionsReduser from "../reducers/optionsReduser";

export default ()=>{
    const store = createStore(
        combineReducers({
            options: optionsReduser,
            filters: filterReducer
        })
    );
    return store;
}

