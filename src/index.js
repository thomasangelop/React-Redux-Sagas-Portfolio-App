import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

function* setProjectsSaga(action){
    console.log('in projects saga');
    // try/catch is standard JavaScript way to handle errors 
    try {
        const response = yield call(axios.get, '/api/projects' );
        yield put( { type: 'SET_PROJECTS', payload: response.data } );
    }
    catch (error) {
        console.log('error with project get request', error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'FETCH_PROJECTS', setProjectsSaga)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
