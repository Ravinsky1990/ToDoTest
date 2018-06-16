import React from "react";
import ReactDOM from "react-dom";
import AppToDo from "./components/AppToDo";
import { Provider } from "react-redux";
import storeConfig from "./store/storeConfig"
import {setOptions} from "./actions/optionActions"
import "normalize.css/normalize.css";
import "./styles/styles.scss"

const store = storeConfig();

const App = (
    <Provider store={store}>
        <AppToDo />
    </Provider>
)

var options = JSON.parse(localStorage.getItem("options"));
if(options){
    store.dispatch(setOptions(options))
}

ReactDOM.render(App, document.getElementById('app'));



console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})