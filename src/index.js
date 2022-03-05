import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import MyComp from './MyComp';
import Todo from './Todo';

ReactDOM.render(
    // <App />, document.getElementById('root')
    <div>
        {/* <MyComp />
        <hr />
        <MyComp />
        <hr />
        <MyComp />
        <hr />
        <MyComp />
        <hr />
        <MyComp />
        <hr /> */}
        <Todo/>
    </div>, document.querySelector("#root")
);
