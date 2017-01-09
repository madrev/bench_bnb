import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from "./util/session_api_util";
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
