import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link} from 'react-router-dom';
import RouterPath from './RouterPath';

export default class Example extends Component {
    render() {
        return (
            <HashRouter>
                <div className="links">
                    <a href="#/">Home</a>
                    <a href="#/about">About</a>
                    <a href="#/product">Product</a>
                    <a href="#/topic">Topic</a>
                    <div style={{margin: '100px'}}><RouterPath/></div>
                </div>
            </HashRouter>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <Example/>,
        document.getElementById('example'));
}
