import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const pitcherList = (state=['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    if (action.type === "ADD_PITCHER"){
        const newPitcher = action.payload
        return [...state, newPitcher]
    }
    return state
}

const catcherList = (state=['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    if (action.type === "ADD_CATCHER"){
        const newCatcher = action.payload
        return [...state, newCatcher]
    }
    return state
}

const baseballStore = createStore(
    combineReducers({
        pitcherList, catcherList
    })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={baseballStore}>
        <App />
    </Provider>
);
