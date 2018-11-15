import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./state/store";

import App from "./components/App";

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}