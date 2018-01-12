import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import ReduxThunk from 'redux-thunk';
//import { log } from 'util';

const reducerNumero = (state = 2, action) => {
	let newState = Object.assign({}, state);

	if (action.type === "AUM") {
		newState = state + 1;
		return newState;
	}
	if (action.type === "DIS") {
		newState = state - 1;
		return newState;
	}

	return state;
}

const reducerTareas = (state = [], action) => {
	let newState = Object.assign({}, state);

	if (action.type === "ADD") {
		
		
		newState = state.concat([ { tarea : action.task, id : action.id} ]);
		return newState;
	}
	

	return state;
}

const reducerId = ( state = 1 , action ) => {
	let newState = Object.assign({}, state);

	if (action.type === "ADD") {
		newState = state + 1;
		return newState;
	}
	

	return state;
}

const reducer = combineReducers({
	numero : reducerNumero,
	tareas : reducerTareas,
	id: reducerId
});

//const state = { cantidad: 2 };

const store = createStore(reducer);


ReactDOM.render(
	<Provider store = { store } >
		<App />
	</Provider>
	, document.getElementById('root')
);

registerServiceWorker();
