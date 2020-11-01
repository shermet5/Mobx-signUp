import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react'
import {BrowserRouter} from 'react-router-dom';
import userStore from "./stores/userStore";

ReactDOM.render(
    <Provider {...{ userStore }}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);


