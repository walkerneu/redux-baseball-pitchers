import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { pitcherList } from './redux/reducers/PitcherListReducer';
import { catcherList } from './redux/reducers/CatcherListReducer';
import { currentPitcher } from './redux/reducers/CurrentPitcherReducer';
import { currentCatcher } from './redux/reducers/CurrentCatcherReducer';

const baseballStore = createStore(
    combineReducers({
        pitcherList, catcherList, currentPitcher, currentCatcher,

    })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={baseballStore}>
        <App />
    </Provider>
);
