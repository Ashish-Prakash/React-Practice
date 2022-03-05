import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import MyComp from './MyComp';

ReactDOM.render(
    // <App />, document.getElementById('root')
    <div>
        <MyComp />
        <hr />
        <MyComp />
        <hr />
        <MyComp />
        <hr />
        <MyComp />
        <hr />
        <MyComp />
        <hr />
    </div>, document.querySelector("#root")
);
