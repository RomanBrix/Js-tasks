/**
 * Created by RomanBrix on 4/20/17.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './react/App';
import reducer from './reducers';

const mountNode = document.getElementById('mountNode');
const store = createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>, mountNode);